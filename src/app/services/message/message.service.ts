import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  isLoading = false;

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  /**
   * Autor - Romario Estrada romarioestrada.ff@hotmail.com
   * normal - This show an alert with one option whitout manage that option.
   * This use the AlertController from Ionic and provides 
   * a good functionality
   * @param data - This have the information to the message
   */
  public async normal(data, okAction = () => { }) {
    if (data.title == '' || data.title == undefined) data.title = 'Mensaje'
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
    if (data.title == '' || data.title == undefined) data.title = '¿Estás seguro?'
    if (data.message == '' || data.message == undefined) data.message = 'Deseas cancelar?...'
    var alert = await this.alertController.create({
      cssClass: 'message message-question',
      header: data.title,
      subHeader: data.subtitle,
      message: data.message,
      backdropDismiss: false, // block the click away from the message
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
   */
  public async error(data, okAction = () => { }) {
    if (data.buttonText == '' || data.buttonText == undefined) data.buttonText = 'Ok'
    if (data.title == '' || data.title == undefined) data.title = 'Error'
    if (data.message == '' || data.message == undefined) data.message = 'Hay un error'

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

  /**
  * Autor - Romario Estrada romarioestrada.ff@hotmail.com
  * success - This show an alert with one option.
  * This use the AlertController from Ionic and provides 
  * a good functionality
  * @param data - This have the information to the message
  * @param okAction - The function to manage the ok state
  */
  public async success(data, okAction = () => { }) {
    if (data.buttonText == '' || data.buttonText == undefined) data.buttonText = 'Aceptar'
    if (data.title == '' || data.title == undefined) data.title = 'Proceso Exitoso'
    if (data.message == '' || data.message == undefined) data.message = 'Gracias por usar <strong>Coink</strong>, sigue y encuentra todo lo que puedes hacer con nosotros!'

    var alert = await this.alertController.create({
      cssClass: 'message message-success',
      header: data.title,
      subHeader: data.subtitle,
      message: data.message,
      backdropDismiss: false, // block the click away from the message
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


  //  ------- LOADING -------
  public async showLoading(message) {
    const loading = await this.loadingController.create({
      cssClass: '',
      message: message,
      // duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  // loading message
  async presentLoading(message) {
    if (message == '' || message == undefined) message = 'Cargando...'
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
      message: message,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  // to close the loading
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
}
