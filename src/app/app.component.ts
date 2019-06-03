import { Component, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  

  // import { HttpClient } from '@angular/common/http';

    if (term) {
      items = items.filter(
        x => x.title.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1
      );
    }
    return of(items).pipe(delay(500));
  }
}

function getMockPeople() {
  return [
    {
      id: "5beb0efbfd95ea0018579f0b",
      title: "Sustantivos y adjetivos",
      subtitle: "",
      abstract: "",
      tags: [
        {
          type: "jurisdiccion",
          _id: "5b75b6580f514a4249ddff2c",
          name: "nación"
        }
      ],
      user: "profe3",
      processed_at: "2018-11-13T17:52:20.328Z",
      subresources: [],
      assets: {
        type: "articulate",
        url:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/index.html",
        previewUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/preview.jpg",
        zipUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/5beb0efbfd95ea0018579f0b.zip"
      },
      ratings: []
    },
    {
      id: "5c38da6ae5f7ba001afa67c8",
      title: "techo",
      subtitle: "techos",
      abstract: "",
      tags: [
        {
          type: "contentType",
          _id: "5c37a86418b96beed3578b63",
          name: "actividades de refuerzo"
        }
      ],
      user: "profe_alejandro",
      processed_at: "2019-01-11T18:04:58.043Z",
      ratings: [],
      subresources: [],
      assets: {
        type: "articulate",
        url:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/index.html",
        previewUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/preview.jpg",
        zipUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/5beb0efbfd95ea0018579f0b.zip"
      }
    },
    {
      id: "5beadcad9dc4390019105979",
      title: "Clases de palabras - Objetivos",
      subtitle: "Objetivos de la clase",
      abstract: "",
      tags: [
        {
          type: "jurisdiccion",
          _id: "5b75b6580f514a4249ddff2c",
          name: "nación"
        }
      ],
      user: "profe3",
      processed_at: "2018-11-13T14:22:11.687Z",
      subresources: [],
      assets: {
        type: "articulate",
        url:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/index.html",
        previewUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/preview.jpg",
        zipUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/5beb0efbfd95ea0018579f0b.zip"
      },
      ratings: []
    },
    {
      id: "5bf469bdc9db210018363679",
      title: "Subgéneros Narrativos",
      subtitle: "",
      abstract: "3 subgéneros narrativos",
      tags: [
        {
          type: "jurisdiccion",
          _id: "5b75b6580f514a4249ddff6d",
          name: "Córdoba"
        }
      ],
      user: "profe4",
      processed_at: "2018-11-20T20:13:55.509Z",
      subresources: [
        {
          id: "5c38da6ae5f7ba001afa67c8"
        },
        {
          id: "5beadcad9dc4390019105979"
        }
      ],
      dependences: {
        "5c38da6ae5f7ba001afa67c8": [],
        "5beadcad9dc4390019105979": ["5c38da6ae5f7ba001afa67c8"]
      },
      assets: {
        type: "articulate",
        url:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/index.html",
        previewUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/preview.jpg",
        zipUrl:
          "https://cdn.integration.ticmas.vi-datec.com/resources/5beb0efbfd95ea0018579f0b/5beb0efbfd95ea0018579f0b.zip"
      }
    }
  ];
}
