interface Person{
name:Name;
email:string;
picture:Picture;
id:Id;
location: FullLocation;
}
interface FullLocation{
    country:string;
    city:string;
    street:Street;
}
interface Street{
    name:string;
}
interface Name{
title:string;
first:string;
last:string;
}
interface Picture{
    mediun:string;
}
interface Id{
    value:string;
}
export {Person}
