'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { loadModel } from '@/app/utils/analyzeImage';

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

export default function WorkingWithAi() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Randomize order
    function shuffleArray<T>(array: T[]): T[] {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    // Initialize shuffledImages
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    // Set initial image URL with first image
    const [imageUrl, setImageUrl] = useState('/image/ai-example/apple.jpg');
    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
        const shuffled = shuffleArray(randomImages);
        setShuffledImages(shuffled);
    }, []);

    const chooseRandomImage = React.useCallback(() => {
        if (shuffledImages.length === 0) {
            return imageUrl;
        }
        
        let nextIndex = currentImage + 1;
        if (nextIndex >= shuffledImages.length) {
            nextIndex = 0;
        }
        setCurrentImage(nextIndex);

        const randomImage = shuffledImages[nextIndex];
        return `/image/ai-example/${randomImage}.jpg`;
    }, [currentImage, shuffledImages, imageUrl]);

    // Enable buttons after image has loaded
    const handleImageLoadComplete = () => {
        setImageLoaded(true);
        setIsButtonDisabled(false);
    };

    // Disable buttons and load new image
    const handleNewImageClick = () => {
        setImageLoaded(false);
        setIsButtonDisabled(true);
        setPredictionLoaded(false);
        setImageUrl(chooseRandomImage());
    };

    // Model data
    const [predictionLoading, setPredictionLoading] = useState(false);
    const [predictionLoaded, setPredictionLoaded] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [probability, setProbability] = useState<string | null>(null);

    const handleAnalyzeImageClick = () => {
        (async () => {
            setPredictionLoading(true);
            const image = document.querySelector('[data-random-image]');

            // Check if image exists
            if (!(image instanceof HTMLImageElement)) {
                console.error('Image element not found or invalid');
                setPredictionLoading(false);
                return;
            }

            try {
                // Load the model
                const model = await loadModel();

                // Classify the image
                const predictions = await model.classify(image);
                setPrediction(predictions[0].className);
                setProbability((predictions[0].probability * 100).toFixed(2));
                
                // Show results
                setPredictionLoading(false);
                setPredictionLoaded(true);
            } catch (error) {
                console.error('Error analyzing image:', error);
                setPredictionLoading(false);
            }
        })();
    };

    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <h1>Working with AI</h1>
                    <p>Here is an example of using a machine learning model in the browser. It has been integrated into the codebase but runs soley on the user&apos;s hardware.</p>

                    <ul>
                        <li><a href="https://www.tensorflow.org/js/" target="_blank">TensorFlow</a></li>
                        <li>Runs entirely with JavaScript</li>
                        <li>Using an already trained model</li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="container">
                    <h2>Image identification</h2>
                    <div className="row">
                        <div className="col-md-7">
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

                        <div className="col-md-5">
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

                            {predictionLoading && (
                                <>
                                    <Image
                                        src="image/loading.svg"
                                        alt=""
                                        width={150}
                                        height={150}
                                        className="px-5 py-3 img-fluid"
                                    />
                                </>
                            )}
                            {!predictionLoading && predictionLoaded && (
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