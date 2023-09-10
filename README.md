# Summarizer Bot

![Summarizer Bot Logo](screenshot.png)

Summarizer Bot is a web application built using Vite, React, and Tailwind CSS that leverages Redux Toolkit for API calls and state management. This app allows users to easily summarize articles and text documents using the Article Extractor and Summarizer API from Rapid API. Additionally, it features a user-friendly interface with loading spinners, icons, and toast notifications for a seamless user experience.

## Table of Contents

- [Summarizer Bot](#summarizer-bot)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Contributing](#contributing)

## Getting Started

Follow these instructions to get the Summarizer Bot up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (>= 12.x)
- [npm](https://www.npmjs.com/) (>= 6.x)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/KamalJoshi-web/Summarizer-Bot-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd summarizer-bot
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your Rapid API key:

   ```
   REACT_APP_RAPID_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Usage

1. Enter the URL of the article you want to summarize or paste the text into the provided text area.

2. Click the "Summarize" button.

3. Wait for the API to process the content. You will see a loading spinner while the summarization is in progress.

4. Once the summarization is complete, the summarized text will be displayed on the screen.

5. You can copy the summarized text or use the icons provided to perform actions like copying or sharing.

6. If there are any errors or issues during the process, you will receive toast notifications with relevant information.

## Dependencies

The following dependencies are used in this project:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-spinner](https://www.npmjs.com/package/react-spinner)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)

## Contributing

Contributions are welcome! Feel free to open issues and pull requests to improve this project.
