'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { loadModel } from "@/app/utils/analyzeImage";

export default function WorkingWithAi() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>('');

    // Available random images
    const randomImages = [
        'apple',
        'banana',
        'bottle',
        'bug',
        'car',
        'cat',
        'chair',
        'coffee',
        'dog',
        'house',
        'train',
        'tree'
    ];

    const chooseRandomImage = (prevImageUrl?: string) => {
        let randomImage: string;
        do {
            randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
        } 
        while (`/image/ai-example/${randomImage}.jpg` === prevImageUrl && randomImages.length > 1);

        return `/image/ai-example/${randomImage}.jpg`;
    };

    // Set image on load
    useEffect(() => {
        setImageUrl(chooseRandomImage());
    }, []);

    // Enable buttons after image has loaded
    const handleImageLoadComplete = () => {
        setImageLoaded(true);
        setIsButtonDisabled(false);
    };

    // Disable buttons and load new image
    const handleNewImageClick = () => {
        setImageLoaded(false);
        setIsButtonDisabled(true);
        setpredictionLoaded(false);
        setImageUrl(chooseRandomImage(imageUrl));
    };

    // Model data
    const [predictionLoaded, setpredictionLoaded] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [probability, setProbability] = useState<string | null>(null);

    const handleAnalyzeImageClick = () => {
        (async () => {
            const image = document.querySelector('[data-random-image]');

            // Load the model
            const model = await loadModel();

            // Classify the image
            const predictions = await model.classify(image);
            setPrediction(predictions[0].className);
            setProbability((predictions[0].probability * 100).toFixed(2));
            setpredictionLoaded(true);
        })();
    };

    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <h1>Working with AI</h1>
                    <p>Here is an example of using a machine learning model in the browser. It has been integrated into the codebase but runs soley on the user's hardware.</p>

                    <ul>
                        <li><a href="https://www.tensorflow.org/js/" target="_blank">TensorFlow</a></li>
                        <li>Runs entirely with JavaScript</li>
                        <li>Using an already trained model</li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Image idenfication</h2>
                    <div className="row">
                        <div className="col-md-8">
                            {imageUrl && (
                                <>
                                    <div className={imageLoaded ? '' : 'loading'}>
                                        <Image
                                            src={imageUrl}
                                            alt=""
                                            width={1000}
                                            height={600}
                                            className="img-fluid"
                                            data-random-image
                                            onLoad={handleImageLoadComplete}
                                            priority
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="col-md-4">
                            <ul className="list-buttons">
                                <li>
                                    <button
                                        className="button-solid"
                                        name="newImage"
                                        disabled={isButtonDisabled}
                                        onClick={handleNewImageClick}>
                                        <span className="button-solid__text">New Image</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="button-solid"
                                        name="analyzeImage"
                                        disabled={isButtonDisabled}
                                        onClick={handleAnalyzeImageClick}>
                                        <span className="button-solid__text">Analyze</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                            className="button-solid__icon">
                                                <path d="M504-480 320-664l56-56 240 240-240 240-56-56z"/>
                                        </svg>
                                    </button>
                                </li>
                            </ul>

                            {predictionLoaded && (
                                <>
                                    <p><strong>Prediction:</strong> <br />{prediction}</p>
                                    <p><strong>Probability:</strong> <br />{probability}%</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}