import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GipExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div>
      <h2>GipExpertApp</h2>
      <AddCategory setCategories={setCategories}></AddCategory>
      <ol>
        {categories.map((c) => (
          <GifGrid key={c} category={c}></GifGrid>
        ))}
      </ol>
    </div>
  );
};

export default GipExpertApp;
