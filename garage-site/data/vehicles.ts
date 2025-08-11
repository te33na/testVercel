export type Vehicle = { id:string; title:string; brand:string; model:string; price:number; mileage_km:number; year:number;
  fuel:"Essence"|"Diesel"|"Hybride"|"Electrique"; gearbox:"Manuelle"|"Automatique"; power_hp:number; doors:number; color:string;
  description:string; photos:string[]; };
const vehicles: Vehicle[] = [
 { id:"peugeot-208-2019", title:"Peugeot 208 Allure 2019", brand:"Peugeot", model:"208", price:11990, mileage_km:78000, year:2019,
   fuel:"Essence", gearbox:"Manuelle", power_hp:82, doors:5, color:"Bleu", description:"Citadine révisée, garantie 6 mois.",
   photos:["https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=1200&auto=format&fit=crop"]},
 { id:"bmw-320d-2017", title:"BMW 320d Sport 2017", brand:"BMW", model:"320d", price:18990, mileage_km:124000, year:2017,
   fuel:"Diesel", gearbox:"Automatique", power_hp:190, doors:4, color:"Noir", description:"Entretien BMW, excellent état.",
   photos:["https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop"]},
 { id:"renault-captur-2020", title:"Renault Captur Intens 2020", brand:"Renault", model:"Captur", price:16490, mileage_km:52000, year:2020,
   fuel:"Hybride", gearbox:"Automatique", power_hp:140, doors:5, color:"Blanc", description:"SUV compact, faible conso.",
   photos:["https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop"]}
];
export default vehicles;
