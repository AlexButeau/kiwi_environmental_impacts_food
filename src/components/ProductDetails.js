/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { ApiDataContext } from './contexts/ApiDataContext';
import './styles/productDetails.scss';

const ProductDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { apiData, fetchApiDataId } = useContext(ApiDataContext);
  const [productDetails, setProductDetails] = useState({
    productName: '',
    DQR: 0,
    globalScore: 0,
  });

  // fetching the ap data for this specific product
  useEffect(() => {
    fetchApiDataId(id);
  }, []);

  useEffect(() => {
    if (apiData.length > 0) {
      const stringScore = (
        Math.round(
          apiData[0].results[0]['Score_unique_EF_(mPt/kg_de_produit)'] * 100,
        ) / 100
      ).toFixed(2);
      setProductDetails({
        productName: apiData[0].results[0].Nom_du_Produit_en_Français,
        DQR:
          apiData[0].results[0][
            'DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)'
          ],
        globalScore: Number(stringScore),
        indicateurs: [
          {
            indicateur: 'Eutrophisation terrestre',
            unit: 'mol N eq',
            value:
              apiData[0].results[0][
                'Eutrophisation_terreste_(mol_N_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Acidification terrestre et eaux douces',
            unit: 'mol H+ eq',
            value:
              apiData[0].results[0][
                'Acidification_terrestre_et_eaux_douces_(mol_H+_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Épuisement des ressources minéraux',
            unit: 'E-06 kg Sb eq',
            value:
              apiData[0].results[0][
                'Épuisement_des_ressources_minéraux_(E-06_kg_Sb_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Particules',
            unit: 'E-06 disease inc',
            value:
              apiData[0].results[0][
                'Particules_(E-06_disease_inc_/kg_de_produit)'
              ],
          },
          {
            indicateur: "Appauvrissement de la couche d'ozone",
            unit: 'E-06 kg CVC11 eq',
            value:
              apiData[0].results[0][
                "Appauvrissement_de_la_couche_d'ozone_(E-06_kg_CVC11_eq/kg_de_produit)"
              ],
          },
          {
            indicateur: 'Eutrophisation marine',
            unit: 'E-03 kg N eq',
            value:
              apiData[0].results[0][
                'Eutrophisation_marine_(E-03_kg_N_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Épuisement des ressources en eau',
            unit: 'm3 épuisés',
            value:
              apiData[0].results[0][
                'Épuisement_des_ressources_eau_(m3_depriv_/kg_de_produit)'
              ],
          },
          {
            indicateur: "Écotoxicité pour écosystèmes aquatiques d'eau_douce",
            unit: 'CTUe',
            value:
              apiData[0].results[0][
                "Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce_(CTUe/kg_de_produit)"
              ],
          },
          {
            indicateur: 'Changement climatique',
            unit: 'kg CO2 eq',
            value:
              apiData[0].results[0][
                'Changement_climatique_(kg_CO2_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Épuisement des ressources énergétiques',
            unit: 'MJ',
            value:
              apiData[0].results[0][
                'Épuisement_des_ressources_énergétiques_(MJ/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Rayonnements ionisants',
            unit: 'kBq U-235 eq',
            value:
              apiData[0].results[0][
                'Rayonnements_ionisants_(kBq_U-235_eq/kg_de_produit)'
              ],
          },
          {
            indicateur: 'Eutrophisation des eaux douces',
            unit: 'E-03 kg P eq',
            value:
              apiData[0].results[0][
                'Eutrophisation_eaux_douces_(E-03_kg_P_eq/kg_de_produit)'
              ],
          },
        ],
      });
    }
  }, [apiData]);

  /* {
  "total": 1,
  "value": "25219",
  "results": [
    {
      "Utilisation_du_sol_(Pt/kg_de_produit)": 117.00684,
      "Code_AGB": "25219",
      "Sous-groupe_d'aliment": "plats composés",
      "Eutrophisation_terreste_(mol_N_eq/kg_de_produit)": 0.102863,
      "Formation_photochimique_d'ozone_(E-03_kg_NMVOC_eq/kg_de_produit)": 7.2459943,
      "Code_CIQUAL": 25219,
      "LCI_Name": "Lasagna or cannelloni with vegetables and goat cheese, cooked",
      "Acidification_terrestre_et_eaux_douces_(mol_H+_eq/kg_de_produit)": 0.027187121,
      "Nom_du_Produit_en_Français": "Lasagnes ou canelloni aux légumes et au fromage de chèvre, cuits",
      "Score_unique_EF_(mPt/kg_de_produit)": 0.31282113,
      "Matériau_d'emballage": "PP",
      "Épuisement_des_ressources_minéraux_(E-06_kg_Sb_eq/kg_de_produit)": 4.9628335,
      "Particules_(E-06_disease_inc_/kg_de_produit)": 0.21000969,
      "Appauvrissement_de_la_couche_d'ozone_(E-06_kg_CVC11_eq/kg_de_produit)": 0.22422898,
      "Eutrophisation_marine_(E-03_kg_N_eq/kg_de_produit)": 10.329865,
      "_i": 1281,
      "Livraison": "Glacé",
      "Préparation": "Micro onde",
      "Saisonnalité": "mix de consommation FR",
      "Épuisement_des_ressources_eau_(m3_depriv_/kg_de_produit)": 2.0270034,
      "_rand": 313173,
      "Groupe_d'aliment": "entrées et plats composés",
      "DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)": 2.68,
      "Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce_(CTUe/kg_de_produit)": 57.941553,
      "Transport_par_avion_(1___par_avion)": false,
      "Changement_climatique_(kg_CO2_eq/kg_de_produit)": 2.565368,
      "Épuisement_des_ressources_énergétiques_(MJ/kg_de_produit)": 38.031044,
      "Rayonnements_ionisants_(kBq_U-235_eq/kg_de_produit)": 0.97586061,
      "Eutrophisation_eaux_douces_(E-03_kg_P_eq/kg_de_produit)": 0.61061584,
      "_score": null,
      "_id": "AgKFnXUB-rQ3wfZeQ492"
    }
  ]
} */

  return (
    <div className="product">
      <h2 className="product-name">{productDetails.productName}</h2>
      <div className="scores">
        <p className="global-score">{productDetails.globalScore}</p>
        <p>Score global</p>
        <p className="product-DQR">
          DQR : {productDetails.DQR}{' '}
          <span
            className="color-dot"
            style={{
              backgroundColor:
                productDetails.globalScore > 3 ? 'orange' : 'light green',
            }}
          />
        </p>
      </div>
      <div className="table-impacts">
        <div className="header">Indicateurs</div>
        <table>
          <tr>
            <th>Indicateur</th>
            <th>Unité (par kg de produit)</th>
            <th>Valeur</th>
          </tr>
          {productDetails.indicateurs &&
            productDetails.indicateurs.map((product) => (
              <tr>
                <td>{product.indicateur}</td>
                <td>{product.unit}</td>
                <td>{(Math.round(product.value * 100) / 100).toFixed(2)}</td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;
