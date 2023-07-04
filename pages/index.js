import Head from 'next/head';
import {  Button, Modal, List, Frame, TaskBar, Calendar} from "@react95/core";
import Desktop from "./components/desktop";
import styled from 'styled-components';
import { Shortcut } from '@react95/icons';
import MonicaHenrique_pixelated from "../Monica_HenriquepxArt.png";
import { height } from '@xstyled/styled-components';


const InsideModal = styled(Frame)`
  

  p,
  ol {
    margin-top: 6px;
  }

  p,
  li:not(:last-child) {
    margin-bottom: 6px;
  }

  p:last-child {
    margin-bottom: 0;
  }

  
`;

export default function Home() {
  return (
    <div className="container">

        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Desktop></Desktop>

        <Modal
          title='Casamento.exe'
          style={{
            overflow:'auto',
            height:'50%'
          }}

          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item>Close</List.Item>
                </List>
              ),
            },
          ]}
          
          //closeModal={() => navigate('/')}
        >

          <InsideModal bg="white" boxShadow="out">
            <h1 class="centered">Monica & Henrique</h1>
            <br></br>
            <h2 class="centered">São Paulo. 13 Abril 2024</h2>
            <br></br>
            <br></br>

              <img
                style={{
                  height: '50%',
                  width: '50%',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
                src={MonicaHenrique_pixelated}
                alt="Monica & Henrique & Sophia"
              />     


            <h2>Vamos nos casar!</h2>
            <p>
              O grande dia está chegando e não poderíamos estar mais animados para compartilhar com a nossa família e amigos um dos dias mais especiais das nossas vidas!
            </p>          
            <br></br>
            <p>
              Queremos muito sua presença neste dia tão importante com muita festa, amor e carinho em uma comemoração que irá nos marcar para sempre!
            </p>

            <br></br>
            <br></br>

            <h2>Faltam:</h2>
            20 dias 01 hora 50 minutos

            <br></br>
            <br></br>

            <h2>Endereco</h2>
            <p>Rua Anhanguera, 104, A Casa de Babette - Barra funda, São Paulo - SP</p>


            <br></br>
            <br></br>

          </InsideModal>
        </Modal>

      <TaskBar
        list={
          <List>
            <List.Item
             //icon={<FolderExe2 variante="32x32_4"/>}
            >
              Lista de Presentes
            </List.Item>

          </List>
        }
      />
        
    </div>
  );
}
