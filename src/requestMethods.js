import axios from "axios";

const BASE_URL = 'http://localhost:5001/api/';
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2U4NDllNDM5NGFkOTE2NjU1MzNkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjc1OTY4MiwiZXhwIjoxNjM3MDE4ODgyfQ.CdtKKUiA3A4fxCj0pt0O7hvKTBFpsrrEadWlxzLFXRk";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});