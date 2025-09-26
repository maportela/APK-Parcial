import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonImg,
  IonFooter,
  IonButtons,
  IonInput
} from '@ionic/angular/standalone';

import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonImg,
    IonFooter,
    IonButtons,
    IonInput
  ],
})
export class HomePage {
  appName = 'MediShare';

   apis = [
    { name: 'OpenFDA', link: 'https://open.fda.gov/', description: 'Informações sobre medicamentos' },
    { name: 'RxNorm', link: 'https://lhncbc.nlm.nih.gov/RxNav/APIs/index.html', description: 'Base de dados de nomes de medicamentos' },
    { name: 'ViaCEP', link: 'https://viacep.com.br/', description: 'Consulta endereços por CEP' }
  ];

  nativeResource = 'Geolocalização (Google Maps) - Para encontrar os postos de saúde próximos à localização da pessoa';

  students = [
    { name: 'Maria Clara Martinez Bassi Portela', photo: 'assets/mariaclara.png' },
    { name: 'Lucas Barros Mourão Silva', photo: 'assets/lucasbarros.png' }
  ];

  turma = 'ADS0301M';
  turno = 'Manhã';
  unidade = 'Bangu';
  periodo = '4º semestre';
  ano = '2025';

  userText: string = '';
  fileContent: string = '';

  constructor() {
  }

  async saveFile() {
    if (!this.userText.trim()) {
      alert('Digite e salve!');
      return;
    }
    
    try {
      const result = await Filesystem.writeFile({
        path: 'medishare.txt',
        data: this.userText,
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });
      
      console.log('Arquivo salvo:', result);
      alert('Arquivo salvo com sucesso!');
      this.userText = '';
    } catch (e) {
      console.error('Erro ao salvar:', e);
      alert('Erro ao salvar arquivo: ' + JSON.stringify(e));
    }
  }

  async readFile() {
    try {
      const contents = await Filesystem.readFile({
        path: 'medishare.txt',
        directory: Directory.Documents,
        encoding: Encoding.UTF8
      });

      this.fileContent = typeof contents.data === 'string' ? contents.data : String(contents.data);
      
      alert('Conteúdo do arquivo: ' + this.fileContent);
    } catch (e: any) {
      console.error('Erro ao ler arquivo:', e);
      
      if (e.message && e.message.includes('does not exist')) {
        alert('Arquivo não encontrado. Salve um arquivo primeiro.');
      } else {
        alert('Erro ao ler arquivo: ' + e.message);
      }
    }
  }
}