import useScrollReveal from '../hooks/useScrollReveal';

function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section ref={ref} id="projects" className={isVisible ? 'slide-up visible' : 'slide-up'}>
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-item">
          <h3>Project HEXA</h3>
          <p>Tools: [HTML,CSS,JS,react-js]</p>
          <p>a website of a company designed in react is library using the frontend tools like HTML CSS and JAVA SCRIPT</p>
          <p>Involves complete details of the company, their clients, about their owner, about the products they sell and distribute</p>
          <a href="https://github.com/maanasvarma2003/Hexapro-Technologies" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>AI Trading BOT </h3>
          <p>Tools: [Random Forest, XGBoost, Deep Reinforcement Learning]</p>
          <p>Aims to develop a fully automated trading bot that uses machine learning to execute buy/sell orders on SENSEX stocks, improving trade accuracy and speed while reducing human error. </p>
          <p>The bot is designed with an aggressive risk tolerance.</p>
          <a href="https://github.com/maanasvarma2003/AI-Trading-Bot" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>AI pdf Chatbot </h3>
          <p>Tools: [Hugging face, python, streamlit, safetensors, pdfplumbe, promtp engineering, Gen AI]</p>
          <p>We use Generative AI to create a chatbot that can answer questions from a pdf file.prompt engineering is used to improve the accuracy of the chatbot.</p>
          <p>This chatbot improvises the user epxperience by providing instant answers to the user's queries</p>
          <a href="https://github.com/maanasvarma2003/AI-pdf-chatbot" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Stock Market Predictor</h3>
          <p>Tools: [python, streamlit, pandas, numpy, matplotlib, scikit-learn, yfinance]</p>
          <p>This project provides an end-to-end pipeline for stock market prediction using both tree-based (XGBoost) and deep learning (LSTM) models</p>
          <p>It includes data download, feature engineering with technical indicators, walk-forward evaluation, and a simple backtester.</p>
          <a href="https://github.com/maanasvarma2003/stock-market-prediction" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
          <h3>Blockchain Based Voting System</h3>
          <p>Tools: [blockchain, python, solidity, web3, javascript]</p>
          <p>This project developed a Blockchain-Based Voting System to address issues of security, transparency, and trust in traditional elections. It leverages Ethereum smart contracts (written in Solidity with Truffle) for tamper-proof vote recording and election management, running on a local Ganache network.
          </p>
          <p>A user-friendly React (TypeScript) frontend, integrating Web3.js, allows for secure voter registration and casting encrypted votes using Crypto-js to ensure anonymity. The system is designed for auditability and prevents double voting.</p>
          <a href="https://github.com/maanasvarma2003/blockchain-based-voting-system" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
