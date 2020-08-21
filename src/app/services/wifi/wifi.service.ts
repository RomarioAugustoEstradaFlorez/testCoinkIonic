import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { MessageService } from '../../services/message/message.service'

@Injectable({
  providedIn: 'root'
})
export class WifiService {
  disconnectSubscription: any;

  constructor(
    private network: Network,
    public messageService: MessageService
  ) {

  }

  public checkConnection = () => {
    // watch network for a disconnection
    let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      let data = {
        'title': 'Error de conexión',
        'message': 'Revisa tu conexión a internet e intenta de nuevo.'
      }
      this.messageService.error(data)
    });

    // watch network for a connection
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });
  }
}
