// TextComponent.js
import React, { useEffect, useState } from "react";
import sanity from "../Sanity/sanity";

const TextComponent = () => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      const fetchText = async () => {
        try {
          const query = `*[_type == "simpleText"][0] { content }`;
          console.log('Query:', query); // Log the query
          const result = await sanity.fetch(query);
          console.log('Fetched text:', result);
          setText(result?.content || '');
        } catch (error) {
          console.error('Error fetching text', error);
        }
      };
  
      fetchText();
    }, []);
  
    return (
      <div>
        <h1>Simple Text</h1>
        <p>{text}</p>
      </div>
    );
  };
  
  export default TextComponent;
