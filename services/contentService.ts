import api from './api';
import { ApiResponse } from '../types';

// Map to store in-flight content requests to avoid duplicates
const contentPromises = new Map<string, Promise<any>>();

export const contentService = {
    getContent: async (identifier: string = 'home_page') => {
        if (contentPromises.has(identifier)) {
            return contentPromises.get(identifier);
        }

        const promise = (async () => {
            try {
                const response = await api.get<ApiResponse<{ content: any }>>(`/content/${identifier}`);
                return response.data.data.content;
            } catch (err) {
                contentPromises.delete(identifier);
                throw err;
            }
        })();

        contentPromises.set(identifier, promise);
        return promise;
    },

    updateContent: async (identifier: string, data: FormData) => {
        const response = await api.put<ApiResponse<{ content: any }>>(`/content/${identifier}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        contentPromises.delete(identifier); // Invalidate cache
        return response.data.data.content;
    }
};
