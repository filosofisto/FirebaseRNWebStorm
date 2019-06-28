import { db } from '../config/firebase';

export default class FirebaseService {

    static getItems = (onsuccess, onerror) => {
        db.collection('items')
            .orderBy('cliente')
            .get()
            .then((querySnapshot) => {
                let items = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();

                    items.push({
                        id: doc.id,
                        cliente: data.cliente,
                        // data: data.data,
                        temperatura: data.temperatura,
                        umidade: data.umidade
                    });
                });

                onsuccess(items);
            })
            .catch(error => onerror(error));
    };

    static addItem = (item, onsuccess, onerror) => {
        db.collection("items").add(item)
            .then((docRef) => onsuccess(item))
            .catch((error) => onerror());
    };

    static removeItem = (item, onsuccess, onerror) => {
        db.collection("items").doc(item.id)
            .delete()
            .then(() => onsuccess())
            .catch(error => onerror(error));
    }
}