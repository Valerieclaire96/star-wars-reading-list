import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      item: "",
      description: {},
    },
    actions: {
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },
      fetchDescription: (e) => {
        fetch(e)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setStore({
              favorites: getStore().favorites,
              item: getStore().item,
              description: data.result.properties,
            });
          });
      },
      setItem: (e) => {
        setStore({
          favorites: getStore().favorites,
          item: e,
          description: getStore().description,
        });
      },
      addFavorite: (e) => {
        console.log(e);
        setStore({
          favorites: [ ...getStore().favorites, e ],
          item: getStore().item,
          description: getStore().description, 
          
        });
      },
      removeFavorite: (e) => {
        useState({
          favorites: getStore().favorites.filter((x) => {
            return x != e;
          }),
          item: getStore().item,
          description: getStore().description,
        });
      },
    },
  };
};

export default getState;
