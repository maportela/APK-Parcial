import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
  IonFooter,
  IonButtons
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonImg,
    IonFooter,
    IonButtons
  ],
})
export class HomePage {
  appName = 'MediShare';

  apis = [
    {
      name: 'OpenFDA',
      link: 'https://open.fda.gov/',
      description: 'Informações sobre medicamentos'
    },
    {
      name: 'RxNorm',
      link: 'https://lhncbc.nlm.nih.gov/RxNav/APIs/index.html',
      description: 'Base de dados de nomes de medicamentos'
    },
     {
      name: 'ViaCEP',
      link: 'https://viacep.com.br/',
      description: 'Consulta endereços por CEP'
    }
  ];

  nativeResource = 'Geolocalização (Google Maps) - Para encontrar os postos de saúde próximos à localização da pessoa';

  students = [
    {
      name: 'Maria Clara Martinez Bassi Portela',
      photo: 'assets/mariaclara.png'
    },
    {
      name: 'Lucas Barros Mourão Silva',
      photo: 'assets/lucasbarros.png'
    }
  ];

  turma = 'ADS0301M';
  turno = 'Manhã';
  unidade = 'Bangu';
  periodo = '4º semestre';
  ano = '2025';
}