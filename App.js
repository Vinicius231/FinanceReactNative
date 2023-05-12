import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { useEffect, useState } from 'react'
import Fii from './components/Fii';

export default function App() {

  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState([])
  const [acao,setAcao] = useState(['PETR3','VALE3','SANB3','ELET3F'])

  useEffect(() => {
    fetch('https://brapi.dev/api/quote/list')
      .then((resp) => resp.json())
      .then((json) => {
        setDados(json.stocks)
        setCarregando(false)      
      })
      .catch(() => {
        alert('Erro ao carregar')
      })
      .finally(() => setCarregando(false))

  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {carregando ? <ActivityIndicator
          size="large"
          color="#0000ff"
        /> : (
          <View>
            <Text style={styles.title}>Finance</Text>
            {
              acao.map((el,i)=> {
                const myItem = dados.find(item => item.stock === el)
                const myIndex = dados.indexOf(myItem);
                return (
                  <Fii dados={dados} nada={myIndex} key={i}/>
                )
              })
            }
          </View>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 50,
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: "bold",
  }
});
