import { Component, OnInit } from '@angular/core';
import { Publication } from '../models/publication';

@Component({
  selector: 'dmla-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications: Publication[] = [
    {
        id: 1,
        authors: ['Zoltán Theisz', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'Towards a novel meta-modeling approach for dynamic multi-level instantiation',
        in: 'Automation and Applied Computer Science Workshop',
        year: 2015,
        location: 'Budapest, Hungary',
        pages: undefined,
        volume: undefined,
        issue: undefined,
        file: "AACS_2015.pdf"
    },

    {
        id: 2,
        authors: ['Zoltán Theisz', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'An Algebraic Instantiation Technique Illustrated by Multilevel Design Patterns',
        in: 'MULTI@MoDELS',
        year: 2015,
        location: 'Ottawa, Canada',
        pages: undefined,
        volume: undefined,
        issue: undefined,
        link: "http://ceur-ws.org/Vol-1505/p6.pdf"
    },

    {
        id: 3,
        authors: ['Zoltán Theisz', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'Multi-level Dynamic Instantiation for Resolving Node-edge Dichotomy',
        in: 'Proceedings of the 4th International Conference on Model-Driven Engineering and Software Development',
        year: 2016,
        location: 'Rome, Italy',
        pages: undefined,
        volume: undefined,
        issue: undefined,
        link: "https://ieeexplore.ieee.org/document/7954370"
    },

    {
        id: 4,
        authors: ['Dániel Urbán, Zoltán Theisz', 'Gergely Mezei'],
        type: 'journal',
        title: 'Formalism for Static Aspects of Dynamic Metamodeling',
        in: 'Periodica Polytechnica Electrical Engineering and Computer Science',
        year: 2017,
        location: undefined,
        pages: undefined,
        volume: 61,
        issue: 1,
        link: "https://pp.bme.hu/eecs/article/view/9547"
    },

    {
        id: 5,
        authors: ['Dániel Urbán', 'Zoltán Theisz', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'Self-describing Operations for Multi-level Meta-modeling',
        in: 'MODELSWARD 2018',
        year: 2018,
        location: "Madeira, Portugal",
        pages: undefined,
        volume: undefined,
        issue: undefined,
        link: "http://www.scitepress.org/Papers/2018/66561/66561.pdf",
        file: "MODELSWARD_2018_Poster.pdf"
    },

    {
        id: 6,
        authors: ['Gergely Mezei', 'Zoltán Theisz', 'Dániel Urbán', 'Sándor Bácsi'],
        type: 'proceedings',
        title: 'The bicycle challenge in DMLA, where validation means correct modeling',
        in: 'MODELS Workshops 2018',
        year: 2018,
        location: "Copenhagen, Denmark",
        pages: "643-652",
        volume: undefined,
        issue: undefined,
        link: "http://ceur-ws.org/Vol-2245/multi_paper_2.pdf",
        file: "MODELS_2018_Poster.pdf"
    },

    {
        id: 7,
        authors: ['Gergely Mezei', 'Zoltán Theisz', 'Dániel Urbán', 'Sándor Bácsi'],
        type: 'proceedings',
        title: 'A bootstrap for self-describing, self-validating multi-layer metamodeling',
        in: 'Automation and Applied Computer Science Workshop',
        year: 2019,
        location: "Budapest, Hungary",
        pages: undefined,
        volume: undefined,
        issue: undefined,
        file: "AACS_2019.pdf"
    },

    {
        id: 8,
        authors: ['Zoltán Theisz', 'Sándor Bácsi', 'Gergely Mezei', 'Ferenc Somogyi', 'Dániel Palatinszky'],
        type: 'proceedings',
        title: 'By multi-layer to multi-level modeling',
        in: '2019 ACM/IEEE 22nd International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
        year: 2019,
        location: "München, Germany",
        pages: undefined,
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.1109/MODELS-C.2019.00024"
    },

    {
        id: 9,
        authors: ['Ferenc Somogyi', 'Gergely Mezei', 'Dániel Urbán', 'Zoltán Theisz', 'Sándor Bácsi', 'Dániel Palatinszky'],
        type: 'proceedings',
        title: 'Multi-level Modeling with DMLA - A Contribution to the MULTI Process Challenge',
        in: '2019 ACM/IEEE 22nd International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
        year: 2019,
        location: "München, Germany",
        pages: "119-127",
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.1109/MODELS-C.2019.00022"
    },

    {
        id: 10,
        authors: ['Gergely Mezei', 'Ferenc Somogyi', 'Zoltán Theisz', 'Dániel Urbán', 'Sándor Bácsi'],
        type: 'proceedings',
        title: 'Towards Mainstream Multi-level Meta-modeling',
        in: 'Proceedings of the 7th International Conference on Model-Driven Engineering and Software Development (MODELSWARD 2019)',
        year: 2019,
        location: "Setúbal, Portugal",
        pages: "481-488",
        volume: undefined,
        issue: undefined,
        link: "https://dl.acm.org/doi/abs/10.5220/0007580404810488"
    },

    {
        id: 11,
        authors: ['Gergely Mezei', 'Ferenc Somogyi', 'Zoltán Theisz', 'Dániel Palatinszky', 'Sándor Bácsi'],
        type: 'proceedings',
        title: 'Towards Flexible, Rigorous Refinement in Metamodeling',
        in: '2019 ACM/IEEE 22nd International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
        year: 2019,
        location: "München, Germany",
        pages: "455-459",
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.1109/MODELS-C.2019.00073"
    },

//    {
//        id: 12,
//        authors: ['Ferenc Somogyi', 'Gergely Mezei', 'Dániel Urbán', 'Zoltán Theisz', 'Sándor Bácsi'],
//        type: 'proceedings',
//        title: 'Challenges in the field of multi-level modeling',
//        in: 'Automation and Applied Computer Science Workshop',
//        year: 2019,
//        location: "Budapest, Hungary",
//        pages: "48-59",
//        volume: undefined,
//        issue: undefined,
//        link: "TODO"
//    },

    {
        id: 13,
        authors: ['Ferenc Somogyi', 'Gergely Mezei', 'Zoltán Theisz', 'Sándor Bácsi', 'Dániel Palatinszky'],
        type: 'proceedings',
        title: 'Multi-level Modeling without Classical Modeling Facilities',
        in: 'Proceedings of the 8th International Conference on Model-Driven Engineering and Software Development - Volume 1: MODELSWARD 2020',
        year: 2020,
        location: "Valletta, Malta",
        pages: "393-400",
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.5220/0008973503930400"
    },

    {
        id: 14,
        authors: ['Andreas Prinz', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'The Art of Bootstrapping',
        in: 'Model-Driven Engineering and Software Development : 7th International Conference, MODELSWARD 2019, Revised Selected Papers',
        year: 2020,
        location: "Prague, Czech Republic",
        pages: undefined,
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.1007/978-3-030-37873-8_8"
    },

    {
        id: 15,
        authors: ['Norbert Somogyi', 'Máté Hídvégi', 'Gergely Mezei'],
        type: 'proceedings',
        title: 'DMLA 3.0: Towards an Industrial Multi-Layer Modeling Framework',
        in: 'Automation and Applied Computer Science Workshop',
        year: 2021,
        location: "Budapest, Hungary",
        pages: undefined,
        volume: undefined,
        issue: undefined,
        file: "AACS_2021.pdf"
    },

    {
        id: 16,
        authors: ['Sándor Bácsi', 'Arne Lange', 'Thomas Kuhne', 'Gergely Mezei', 'Colin Atkinson'],
        type: 'proceedings',
        title: 'Melanee and DMLA - A Contribution to the MULTI 2021 Collaborative Comparison Challenge',
        in: '2021 ACM/IEEE International Conference on Model Driven Engineering Languages and Systems Companion (MODELS-C)',
        year: 2021,
        location: "Los Alamitos (CA), USA",
        pages: "556-565",
        volume: undefined,
        issue: undefined,
        link: "https://doi.org/10.1109/MODELS-C53483.2021.00086"
    },

    {
        id: 17,
        authors: ['Ferenc Somogyi', 'Gergely Mezei', 'Zoltán Theisz', 'Sándor Bácsi', 'Dániel Palatinszky'],
        type: 'journal',
        title: 'Playground for multi-level modeling constructs',
        in: 'Software and Systems Modeling (Theme Section: Multi-Level Modeling)',
        year: 2021,
        location: undefined,
        pages: "1-36",
        volume: 21,
        issue: 2,
        link: "https://doi.org/10.1007/s10270-021-00900-2"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  processAuthors(authors: string[]): string {
    let result: string = ""
    authors.forEach (
      //a => result = result + a[0] + '.' + a.substring(a.search(' ')) + ', '
      a => result = result + a + ', '
    )
    result = result.slice(0, result.length - 2)
    return result
  }
}
