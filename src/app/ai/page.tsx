'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { loadModel, analyzeImage } from "@/app/utils/analyzeImage";

export default function AI() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [timestamp, setTimestamp] = useState<number | null>(null);

    useEffect(() => {
        setTimestamp(Date.now());
    }, []);

    const imageUrl = timestamp
        ? `https://picsum.photos/1000/600?t=${timestamp}`
        : `https://picsum.photos/1000/600?t=${timestamp}`;

    const handleImageLoadComplete = () => {
        setImageLoaded(true);
        setIsButtonDisabled(false);
    };

    const handleNewImageClick = () => {
        setImageLoaded(false);
        setIsButtonDisabled(true);
        setTimestamp(Date.now());
    };

    const handleAnalyzeImageClick = () => {
        console.log('Analyzing image...');
    };

    const [predictionLoaded, setpredictionLoaded] = useState(false);
    const [prediction, setPrediction] = useState<string | null>(null);
    const [probability, setProbability] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const image = document.querySelector('[data-random-image]');
            const loadedModel = await loadModel();
            const predictions = await loadedModel.classify(image);
            console.log(predictions);
            setPrediction(predictions[0].className);
            setProbability((predictions[0].probability * 100).toFixed(2));
            setpredictionLoaded(true);
        })();
    }, []);

    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <h1>Work with AI</h1>
                    <div className="row">
                        <div className="col-md-8">
                            <div className={imageLoaded ? '' : 'loading'}>
                                <Image
                                    src={imageUrl}
                                    alt=""
                                    width={1000}
                                    height={600}
                                    className="img-fluid"
                                    data-random-image
                                    onLoadingComplete={handleImageLoadComplete} />
                            </div>
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