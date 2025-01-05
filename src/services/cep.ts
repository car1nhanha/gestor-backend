const axios = require("axios");
import opencage from "opencage-api-client";

export interface BuscarCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  unidade: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface BuscarGeolocalizacaoResponse {
  results: Array<{
    geometry: {
      lat: number;
      lng: number;
    };
  }>;
}

async function buscarCep(cep: string): Promise<BuscarCepResponse> {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  return new Promise((resolve, reject) =>
    axios
      .get(url)
      .then((response: any) => resolve(response.data))
      .catch((error: any) => reject(error))
  );
}

export const buscarGeolocalizacao = async (
  cepUnformated: string
): Promise<BuscarGeolocalizacaoResponse> => {
  const cep = cepUnformated.replace(/\D/g, "");
  const response = await buscarCep(cep);
  const query = `${response.logradouro} ${response.bairro} ${response.localidade} ${response.uf}`;
  const result = await opencage.geocode({ q: query });
  return result;
};
