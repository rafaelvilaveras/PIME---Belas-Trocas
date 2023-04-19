
export default function padronizeUrl(url){
    return url.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

