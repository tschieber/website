import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
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