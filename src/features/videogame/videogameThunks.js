import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideogames = createAsyncThunk(
  "videogames/fetchVideogames",
  async () => {
    const response = await axios.get("/videogames");
    return response.data;
  }
);

export const fetchVideogameById = createAsyncThunk(
  "videogames/fetchVideogameById",
  async (id) => {
    const response = await axios.get(`/videogames/${id}`);
    return response.data;
  }
)