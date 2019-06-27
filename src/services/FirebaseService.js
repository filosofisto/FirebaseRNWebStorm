import { db } from '../config/firebase';

export default class FirebaseService {

    static getItems = (callback) => {
        db.collection('items').get()
            .then((querySnapshot) => {
                let items = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();

                    items.push({
                        cliente: data.cliente,
                        // data: data.data,
                        temperatura: data.temperatura,
                        umidade: data.umidade
                    });
                });

                callback(items);
            });
    }
}