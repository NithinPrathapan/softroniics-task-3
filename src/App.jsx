import React from "react";
import Navbars from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  const productDetails = [
    {
      name: "Shoe 1",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZvkZxHa1P3b6MUQUi6y04swub6O01-FFH-4rW0zvS94bTXm-kK6W27DWsetoO-uDZm0k3MvF1GvqkDZg6Z8mP9hn8WN9VytFd-tPjlSKSQqrSA6-fNzDvLg",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,     commodi necessitatibus aliquid fuga eum culpa esse natus officiis,      sapiente autem voluptatem illo impedit obcaecati ipsam! Dolorum omnis     dignissimos necessitatibus accusamus",
      price: 50,
    },
    {
      name: "Shoe 2",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTu2pMlKRLp-RgcfkONvhnUzmWwRmGI_ebhKhdePkvki-sG6rirVraYGAiEgw5ZNLnz1FVl1Llt7LCTAIjxxI4fK1G3uHMsrkJbbdBl0d29HcMn88cHTsq5OQ",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,     commodi necessitatibus aliquid fuga eum culpa esse natus officiis,      sapiente autem voluptatem illo impedit obcaecati ipsam! Dolorum omnis     dignissimos necessitatibus accusamus",
      price: 40,
    },
    {
      name: "Shoe 3",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRGMTBZ2XMJ9nfTPqdaUZ17iHdB7OfvfT-k-grlMxYpwoFBSa-808YoPB7oPPPl-7C-WOw9jMlFle7LkI_b0ugUOtdu5INoOBkxLQkJsjatXldfvJj1cJfVWg",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,     commodi necessitatibus aliquid fuga eum culpa esse natus officiis,      sapiente autem voluptatem illo impedit obcaecati ipsam! Dolorum omnis     dignissimos necessitatibus accusamus",
      price: 30,
    },
  ];
  return (
    <div className="w-4/5 flex flex-col justify-center items-center mx-auto">
      <Navbars />
      <h1 className="text-center text-4xl my-6">PRODUCTS</h1>
      <div className="flex md:flex-row flex-col  gap-4 p-12 shadow-md bg-gray-200 my-4">
        {productDetails.map((item, index) => {
          return (
            <ProductCard
              name={item.name}
              desc={item.desc}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
