import axios from 'axios';
import { convertKeysToSnakeCase } from './utils/caseConversion';

class Hyperaide {
  public baseURL: string = 'https://hyperaide.com';
  private apiKey: string;
  public vectors: Vectors;
  

  constructor(options: { apiKey: string }) {
    if (!options.apiKey) {
      throw new Error("API Key is required.");
    }
    this.apiKey = options.apiKey;
    this.vectors = new Vectors(this);
  }

  public getHeaders() {
    return {
      'api-key': this.apiKey
    };
  }

  // Prompts Methods
  async response(options: { promptId: string, returnPromptOnly?: boolean, additionalMessages?: any }) {
    const requestData = convertKeysToSnakeCase(options);
    const response = await axios.post(`${this.baseURL}/api/v1/response`, requestData, { headers: this.getHeaders() });
    return response.data;
  }

  async feedback(options: { responseId: string, vote: string, message: string }) {
    const response = await axios.post(`${this.baseURL}/api/v1/feedback`, convertKeysToSnakeCase(options), { headers: this.getHeaders() });
    return response.data;
  }
}

class Vectors {
  private hyperaide: Hyperaide;

  constructor(hyperaide: Hyperaide) {
    this.hyperaide = hyperaide;
  }

  async add(options: { text: string, metadata?: any }) {
    const response = await axios.post(`${this.hyperaide.baseURL}/api/v1/vector`, convertKeysToSnakeCase(options), { headers: this.hyperaide.getHeaders() });
    return response.data;
  }

  async update(options: { vectorId: string, text: string, metadata?: any }) {
    const { vectorId, ...rest } = options;
    const response = await axios.patch(`${this.hyperaide.baseURL}/api/v1/vector`, rest, { headers: this.hyperaide.getHeaders() });
    return response.data;
  }

  async delete(options: { vectorId: string }) {
    const response = await axios.delete(`${this.hyperaide.baseURL}/api/v1/vector`, { data: convertKeysToSnakeCase(options), headers: this.hyperaide.getHeaders() });
    return response.data;
  }

  async show(options: { vectorId: string }) {
    const response = await axios.get(`${this.hyperaide.baseURL}/api/v1/vector`, { params: convertKeysToSnakeCase(options), headers: this.hyperaide.getHeaders() });
    return response.data;
  }

  async search(options: { query: string }) {
    const response = await axios.post(`${this.hyperaide.baseURL}/api/v1/vector_box/search`, convertKeysToSnakeCase(options), { headers: this.hyperaide.getHeaders() });
    return response.data;
  }
}

export default Hyperaide;
