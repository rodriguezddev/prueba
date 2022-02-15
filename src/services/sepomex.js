import axios from "axios";
import Config from "./config";

export default {
  async getZipCodeInfo(zipCode) {
    const { data: { response: zipCodeData } } = await axios.get(
      `${Config.API_SEPOMEX}/query/info_cp/${zipCode}?type=simplified&token=2dbe6199-404f-47d5-b6f9-ab6261bae49c`
    );

    return [zipCodeData.asentamiento, zipCodeData.estado, zipCodeData.municipio];
  }
};
