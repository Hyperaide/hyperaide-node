# Hyperaide SDK Documentation

## Overview

The Hyperaide SDK offers a convenient interface to integrate with the Hyperaide platform.

## Getting Started

### Installation

To install the SDK:

```bash
npm install hyperaide
```

Or if you're using Yarn:

```bash
yarn add hyperaide
```

### Initialization

Begin by initializing the SDK:

```javascript
import Hyperaide from 'hyperaide';

const hyperaide = new Hyperaide({ apiKey: 'YOUR_API_KEY' });
```

## Usage

### Prompts

To get a response:

```javascript
const response = await hyperaide.response({
  promptId: "YOUR_PROMPT_ID",
  returnPromptOnly: true
});
```

To send feedback:

```javascript
const feedbackData = await hyperaide.feedback({
  responseId: "YOUR_RESPONSE_ID",
  vote: "up",
  message: "Feedback message"
});
```

### Vectors

Manage vectors with these methods:

**1. Add a vector**

```javascript
const newVector = await hyperaide.vectors.add({
  vectorBoxId: "YOUR_VECTOR_BOX_ID",
  text: "YOUR_VECTOR_TEXT"
});
```

**2. Update a vector**

```javascript
const updatedVector = await hyperaide.vectors.update({
  vectorBoxId: "YOUR_VECTOR_BOX_ID",
  vectorId: "YOUR_VECTOR_ID",
  text: "NEW_VECTOR_TEXT"
});
```

**3. Delete a vector**

```javascript
await hyperaide.vectors.delete({ 
  vectorBoxId: "YOUR_VECTOR_BOX_ID", 
  vectorId: "YOUR_VECTOR_ID" 
});
```

**4. Retrieve vector details**

```javascript
const vectorInfo = await hyperaide.vectors.retrieve({ 
  vectorBoxId: "YOUR_VECTOR_BOX_ID", 
  vectorId: "YOUR_VECTOR_ID" 
});
```

**5. Search for vectors**

```javascript
const searchResults = await hyperaide.vectors.search({ 
  vectorBoxId: "YOUR_VECTOR_BOX_ID", 
  query: "SEARCH_QUERY" 
});
```

## Conclusion

The Hyperaide SDK simplifies the integration process with the Hyperaide platform. For further details or support, please refer to the official documentation or reach out to our support team.
