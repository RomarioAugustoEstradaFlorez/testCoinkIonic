import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    public alertController: AlertController
  ) { }

  /**
   * Autor - Romario Estrada romarioestrada.ff@hotmail.com
   * normal - This show an alert with one option whitout manage that option.
   * This use the AlertController from Ionic and provides 
   * a good functionality
   * @param data - This have the information to the message
   */
  public async normal(data, okAction = () => { }) {
    if (data.buttonText == '' || data.buttonText == undefined) data.buttonText = 'Ok'

    var alert = await this.alertController.create({
      cssClass: 'message message-normal',
      header: data.title,
      subHeader: data.subtitle,
      message: data.message,
      buttons: [data.buttonText]
    });

    await alert.present();
  }

  /**
   * Autor - Romario Estrada romarioestrada.ff@hotmail.com
   * question - This show an alert with two options.
   * This use the AlertController from Ionic and provides 
   * a good functionality
   * @param data - This have the information to the message
   * @param okAction - the function to manage the ok state
   * @param cancelAction - the function to manage the state cancel
   */
  public async question(data, okAction = () => { }, cancelAction = () => { }) {
    var alert = await this.alertController.create({
      cssClass: 'message message-question',
      header: data.title,
      subHeader: data.subtitle,
      message: data.message,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            return cancelAction()
          }
        },
        {
          text: 'Cancelar',
          role: 'ok',
          handler: () => {
            return okAction()
          }
        }
      ]
    });

    await alert.present();
  }

  /**
   * Autor - Romario Estrada romarioestrada.ff@hotmail.com
   * error - This show an alert with one option.
   * This use the AlertController from Ionic and provides 
   * a good functionality
   * @param data - This have the information to the message
   * @param okAction - The function to manage the ok state
   * @param cancelAction - the function to manage the cancel state 
   */
  public async error(data, okAction = () => { }) {
    if (data.buttonText == '' || data.buttonText == undefined) data.buttonText = 'Ok'
    var alert = await this.alertController.create({
      cssClass: 'message message-error',
      header: data.title,
      subHeader: data.subtitle,
      message: data.message,
      buttons: [
        {
          text: data.buttonText,
          role: 'ok',
          handler: () => {
            return okAction()
          }
        }
      ]
    });

    await alert.present();
  }
}
