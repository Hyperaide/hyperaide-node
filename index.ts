import axios from 'axios';

class Hyperaide {
  private baseURL: string = 'https://hyperaide.com';
  private apiKey: string;

  constructor(options: { apiKey: string }) {
    if (!options.apiKey) {
      throw new Error("API Key is required.");
    }
    this.apiKey = options.apiKey;
  }

  private getHeaders() {
    return {
      'api-key': this.apiKey
    };
  }

  // VectorBoxItems Methods
  async createVectorBoxItem(vectorBoxId: string, text: string, metadata?: any) {
    const response = await axios.post(`${this.baseURL}/api/v1/vector_boxes/${vectorBoxId}/items`, { text, metadata }, { headers: this.getHeaders() });
    return response.data;
  }

  async updateVectorBoxItem(vectorBoxId: string, vectorId: string, text: string, metadata: any) {
    const response = await axios.put(`${this.baseURL}/api/v1/vector_boxes/${vectorBoxId}/items/${vectorId}`, { text, metadata }, { headers: this.getHeaders() });
    return response.data;
  }

  // ... (Other VectorBoxItems methods)

  // Prompts Methods
  async response(options: { prompt_id: string, return_prompt_only?: boolean, additional_messages?: any }) {
    const response = await axios.post(`${this.baseURL}/api/v1/prompts/${options.prompt_id}/response`, options, { headers: this.getHeaders() });
    return response.data;
  }

  async feedback(options: { response_id: string, vote: string, message: string }) {
    const response = await axios.post(`${this.baseURL}/api/v1/prompts/${options.response_id}/feedback`, options, { headers: this.getHeaders() });
    return response.data;
  }

  // ... (Other Prompts methods)
}

export default Hyperaide;
