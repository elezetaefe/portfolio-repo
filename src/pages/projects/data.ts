

export interface Project {
    id: number;
    nom: string;
    imagen: string;
    imagen2: string;
    fecha: string;
    autor: string;
    brief: string;
    solution: string;
}

export const projects: Project[] = [
    {
        id: 0,
        nom: "kaoka",
        imagen: "img-03.png",
        imagen2: "img-10.png",
        fecha: "4.11.2025",
        autor: "Mon Hernández R., Axel Martínez G., Laura Zaragoza F.",
        brief: "kaoka is a valencian chocolate brand just starting in the industry. They need a visual identity that reflects their embracing of traditional culture combined with a sense of modernity to appeal to younger costumers. They want us to design their packaging, logo and some instagrams stories.",
        solution: "We thought that combining vivid colours with rounded shapes inspired by cocoa itself would communicate exactly what the client wanted. The logo was directly inspired by the shape of the cocoa seed and we represent through simplified shapes other ingredients added to the chocolates.",
    },
    {
      id: 1,
        nom: "The Invisible Man",
        imagen: "img-01.png",
        imagen2: "img-09.png",
        fecha: "1.03.2025",
        autor: "Laura Zaragoza F.",
        brief: "Teatro Flumen reached out as they needed a poster design for the theatre play 'The Invisible Man', an adaptation of the original novel.",
        solution: "After many diferent sketches, I found that the design that worked the best was the most synthethic one.",
    },
    {
      id: 2,
        nom: "Doechii",
        imagen: "img-02.png",
        imagen2: "img-02.png",
        fecha: "14.04.2025",
        autor: "Laura Zaragoza F.",
        brief: "I did this poster as a creative exercise to explore composition and illustration combined with typography",
        solution: "The final result is an illustrated version of a moment in Doechii's 2025 Grammys performance together with a hand-drawn typeface",
    },
    {
      id: 3,
        nom: "Envidia",
        imagen: "img-04.png",
        imagen2: "img-11.png",
        fecha: "13.02.2026",
        autor: "Laura Zaragoza F., Axel Martínez G.",
        brief: "The Envy poster is part of an advertising campaign for the play 'Siete', inspired by the Seven Deadly Sins.",
        solution: "We did explorations for 3 versions of the poster: photography, texture and geometry. As the texture one was the most interesting and adequate, we chose it as our final poster",
    },
    {
      id: 4,
        nom: "Ritmes del mar",
        imagen: "img-05.png",
        imagen2: "img-05.png",
        fecha: "16.10.2026",
        autor: "Laura Zaragoza F.",
        brief: "Ritmes del mar (Rythms of the sea) is a valencian music summer festival celebrated at dusk. We had to come up with a promotional poster in 3h using only paper cut-outs",
        solution: "I chose the colors that I thought represented best the event and reproduced with the cut-outs my sketches.",
    },
    {
      id: 5,
        nom: "CREFAD",
        imagen: "img-06.png",
        imagen2: "img-12.png",
        fecha: "21.11.2025",
        autor: "Laura Zaragoza F., Mon Hernández R., Axel Martínez G.",
        brief: "The 'Congreso Iberamericano de Creación y Fabricación digital' (Iberoamerican Congress of Digital Creation and Fabrication) got in touch because it needed a promotional poster for their first ever event. It had to convey a technology and creativity at the same time. We could only use typography as a limitation",
        solution: "After many trial and error, we found that a combination of vivid colours such as yellow, purple and fuchsia conveyed that creative element. This, combined with the straight grid and serigraphy effect to include that technological feeling, turned out to be the best option",
    },
    {
      id: 6,
        nom: "36daysoftype",
        imagen: "img-07.png",
        imagen2: "img-13.png",
        fecha: "28.10.2025",
        autor: "Laura Zaragoza F.",
        brief: "This was part of a Typography Class exercise, which consisted in doing our own version of the '36daysoftype challenge' (which went viral in instagram). We had total creative liberty to design as we pleased 3 glyphs",
        solution: "I chose these letters because they were the most interesting to me. The illustrations are inspired by the pilot episode of Steven Universe",
    },
    {
      id: 7,
        nom: "A Room of One's Own",
        imagen: "img-08.png",
        imagen2: "img-14.png",
        fecha: "15.12.2025",
        autor: "Laura Zaragoza F.",
        brief: "This was an Illustration Class' project. We had to do an illustrated version of a novel out of a list that was given to us. The elements designed were the cover, the endpapers and two double-paged spreads.",
        solution: "I chose 'A Room of One's Own' by Virginia Woolf. The designs and elements are based off of furniture, decorative arts and fashion from the 30th century",
    },
]