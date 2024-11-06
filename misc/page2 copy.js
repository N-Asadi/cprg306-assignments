"use client";

import { useState, useEffect } from "react";
import { resolve } from "styled-jsx/css";

export default function Page() {
  const [randomDogUrl, setRandomDogUrl] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json(); // data is a promise and will be an object.
    const url = data.message;
    setRandomDogUrl(url); // the URL of the dog image.
  };

  const getDogBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message); // Object keys returns an array of the object's keys.
    setDogBreeds(breeds);
  };

  const handleBreedChange = (event) => {
    //alert(event.target.value);
    setSelectedBreed(event.target.value);
  };

  useEffect(() => {
    getRandomDog();
    getDogBreeds();
  }, []); // empty array means run once.

  useEffect(() => {
    if (selectedBreed === "") return;
    getRandomDog(selectedBreed);
  }, [selectedBreed]);

  return (
    <div>
      <h1>Week 8</h1>
      <div>
        <select onChange={handleBreedChange}>
          {dogBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <p>
        <img src={randomDogUrl}></img>
      </p>
    </div>
  );
}
