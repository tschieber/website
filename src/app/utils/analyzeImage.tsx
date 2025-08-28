import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

export async function loadModel() {
    try {
        const model = await mobilenet.load();
        return model;
    } catch (error) {
        console.error('Error loading the model:', error);
        throw error;     
    }
}

export function analyzeImage(image: HTMLImageElement | ImageData) {
    const tensor = tf.browser.fromPixels(image);
    const resized = tf.image.resizeNearestNeighbor(tensor, [224, 224]);
    const normalized = resized.toFloat().div(127.5).sub(1).expandDims();
    return normalized; 
}