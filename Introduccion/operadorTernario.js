const boleto = "regular";
// let codigoAcceso;

/* if (boleto == 'vip') {
    codigoAcceso = 'VIP-123-456';
}else{
    codigoAcceso = 'REGULAR-456-789';
} */

// Operador ternario - Guardando el resultado en una varible
const codigoAcceso = boleto === "vip" ? "VIP-123-456" : "REGULAR-456-789";

// Solo como condicional
boleto === "vip"
  ? console.log("Tu boleto es de tipo VIP")
  : console.log("Tu boleto es de tipo regular");
