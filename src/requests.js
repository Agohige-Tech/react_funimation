const API_KEY = "089b17b0530caf130ad1460ee0ed697c";

const requests = {
  fetchTokyoMX: `/discover/tv?api_key=${API_KEY}&with_networks=614`,
  fetchAnimaxAsia: `/discover/tv?api_key=${API_KEY}&with_networks=3268`,
  fetchCrunchyRoll: `/discover/tv?api_key=${API_KEY}&with_networks=1112`,
};

export default requests;
