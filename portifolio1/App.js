import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import { Asset } from 'expo-asset';

const mainImageUrl = 'https://media.licdn.com/dms/image/D4D03AQFqI3p1Gs8Jgw/profile-displayphoto-shrink_200_200/0/1719860444485?e=1726704000&v=beta&t=MIA0D7Ifqj43_DtQ1VIqO0P0ATbX6RDVoSItfX16Hl4';
const projects = [
  { id: 1, title: 'Dashboard Empresarial', description: 'Descrição: Desenvolvimento de um dashboard para análise de dados e tomada de decisões informadas, com dois painéis principais focados em diferentes aspectos dos dados.Componentes: Gráficos de barras e linhas, indicadores chave de desempenho (KPIs).Tecnologias: Power BI, Excel Metodologias: Agile, Kanban.', imageUri: 'https://media.licdn.com/dms/image/D4D2DAQGsxMUdTU3txw/profile-treasury-image-shrink_800_800/0/1720893555124?e=1722099600&v=beta&t=xMdT5jbLZpWOiduNCzu7ycElBwYVFYiaOj2cv2Dcu1g' },
  { id: 2, title: 'Geo Senai', description: 'Descrição: Desenvolvimento de um totem que auxilia alunos novos e veteranos na localização de salas e informações sobre a escola.Função: Designer e Técnico em Infraestrutura em Nuvem, hospedando o totem na Azure for Students sem custo.Tecnologias: React Native, Git, GitHubMetodologias: Agile, Kanban.', imageUri: 'https://media.licdn.com/dms/image/D4D2DAQGd-pRC29Hp7g/profile-treasury-image-shrink_800_800/0/1719863912117?e=1722099600&v=beta&t=smVY0FetJmKuzBA6N1nBdaQDQdLHxGlVVQ1gx3-qYLo'},
  { id: 3, title: 'JotNest', description: 'Descrição: Aplicação para organização e gerenciamento de compromissos e tarefas, com telas dedicadas para diferentes áreas da vida.Funcionalidades: Telas dedicadas para visitas a restaurantes, lanchonetes e pizzarias, gestão de compromissos, interface intuitiva.Benefícios: Praticidade, eficiência, versatilidade.Tecnologias: React NativeMetodologias: Agile, Kanban', imageUri: 'https://media.licdn.com/dms/image/D4D2DAQF3fMCclQO8SA/profile-treasury-image-shrink_160_160/0/1720744042869?e=1722034800&v=beta&t=hMl0uHOI4ATkj2pkrFL5MXrYs-e9coSZs8IGQhFKFuo' },
  { id: 4, title: 'Calculos hidraulicos', description: 'Descrição: Desenvolvimento de um aplicativo que facilita cálculos no campo, aumentando a produtividade da empresa.Função: Desenvolvedor em conjunto com a equipe.Tecnologias: React Native, Git, GitHub, Azure DevOpsMetodologias: Agile, Kanban ', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMNc7bvXUW3vTskVhSFrz1tXbBzWydrNArLg&s' },
  

];
const { width } = Dimensions.get('window');

const App = () => {
  const openSocialLink = (url) => {
    Linking.openURL(url);
  };

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/5516994392545');
  };

  const downloadAndShareFile = async () => {
    try {
      // Baixar o arquivo PDF
      const asset = Asset.fromModule(require('./assets/Guilherme Lopes Rocetom (3).pdf'));
      await asset.downloadAsync();
      
      // Obter o caminho local do arquivo
      const fileUri = asset.localUri;

      if (fileUri) {
        // Compartilhar o arquivo
        await shareAsync(fileUri);
      } else {
        alert('Falha ao obter o caminho do arquivo.');
      }
    } catch (error) {
      alert('Falha ao baixar e compartilhar o currículo.');
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={['#e4988d', '#000000']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={{ uri: mainImageUrl }} style={styles.mainImage} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Guilherme Lopes Rocetom</Text>
            <Text style={styles.headerSubText}>Técnico em Desenvolvimento de Sistemas | Azure | React Native | Vercel  | </Text>
            <View style={styles.socialIcons}>
              <Ionicons name="logo-linkedin" size={RFValue(24)} color="#ffffff" style={styles.icon} onPress={() => openSocialLink('https://www.linkedin.com/in/guilherme-lopes-rocetom-3a437a25b')} />
              <Ionicons name="logo-github" size={RFValue(24)} color="#ffffff" style={styles.icon} onPress={() => openSocialLink('https://github.com/Gui28112005')} />
              <Ionicons name="logo-instagram" size={RFValue(24)} color="#ffffff" style={styles.icon} onPress={() => openSocialLink('https://www.instagram.com/guilherme.rocetom/')} />
              <Ionicons name="logo-whatsapp" size={RFValue(24)} color="#ffffff" style={styles.icon} onPress={openWhatsApp} />
              <Ionicons name="mail" size={RFValue(24)} color="#ffffff" style={styles.icon} onPress={() => openSocialLink('mailto:guilhermedevsistemas@gmail.com')} />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Mim ☕</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              Olá! Meu nome é Guilherme Lopes Rocetom e sou apaixonado pela área de Desenvolvimento de Sistemas, especialmente em desenvolvimento de sistemas e análise de dados. Minha formação inclui um curso técnico em TI pelo Senai São Carlos Antônio Adolpho Lobbe e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Cruzeiro do Sul Virtual.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos</Text>
          {projects.map(project => (
            <View key={project.id} style={styles.projectCard}>
              <Image source={{ uri: project.imageUri }} style={styles.projectImage} resizeMode="cover" />
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quem sou eu profissionalmente: 💼</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              Tenho um grande interesse em Power BI e cibersegurança na nuvem, e estou sempre buscando maneiras de aprimorar minhas habilidades. Sou um entusiasta da cultura DevOps, integrando desenvolvimento e operações para entregar soluções mais eficientes e confiáveis.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Minhas principais competências: 👨🏻‍💻</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              - Desenvolvimento de Sistemas: Experiência em programação e análise de sistemas.{'\n'}
              - Desenvolvimento de Aplicativos Mobilie: Experiência em programação de Aplicativos.{'\n'}
              - Análise de Dados com Power BI: Transformação de dados em insights acionáveis.{'\n'}
              - Cultura DevOps: Integração de desenvolvimento e operações para otimização de processos.
            </Text>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Soft Skills:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              - 🧠 Criatividade na solução de problemas{'\n'}
              - 🗣️ Comunicação eficaz{'\n'}
              - 👥 Trabalho em equipe{'\n'}
              - 👨‍🏫 Liderança de projetos colaborativos{'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologias que adquiri em minha formação:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              - Java ☕{'\n'}
              - Spring 🍃{'\n'}
              - React Native 📱{'\n'}
              - HTML 🌐{'\n'}
              - CSS 🎨{'\n'}
              - Azure ☁️{'\n'}
              - Vercel 🚀{'\n'}
              - SQL Workbench 🗃️{'\n'}
              - Power BI 📊{'\n'}
              - Excel 🗒️
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que eu valorizo:</Text>
          <View style={styles.textContainer}>
            <Text style={styles.sectionContent}>
              Valorizo a criatividade e a comunicação eficaz na solução de problemas, e tenho facilidade para trabalhar em equipe e liderar projetos colaborativos. Resido em São Carlos, SP, e estou sempre em busca de novas oportunidades para aplicar e expandir meu conhecimento em TI e DevOps.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.downloadButton} onPress={downloadAndShareFile}>
            <Text style={styles.downloadButtonText}>obtenha o link do currículo pdf</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2024 Guilherme Lopes Rocetom. Todos os direitos reservados.</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10,
    marginTop:45,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    marginBottom: 45,
    elevation: 20,
  },
  mainImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    resizeMode: 'cover',
    marginRight: 20,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: RFValue(22),
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  headerSubText: {
    color: 'white',
    fontSize: RFValue(12),
    marginBottom: 15,
  },
  socialIcons: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    marginTop: 5,
    marginRight:40,
  },
  icon: {
    marginRight: 10,
  },
  section: {
    marginBottom: 80,
  },
  sectionTitle: {
    fontSize: RFValue(17),
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  sectionContent: {
    fontSize: RFValue(11),
    color: 'white',
    textAlign: 'left',
  },
  textContainer: {
    backgroundColor: 'black',
    padding: 30,
    marginHorizontal:10,
    borderRadius: 10,
  },
  projectCard: {
    backgroundColor: 'black',
    borderRadius: 30,
    padding: 22,
    marginBottom: 70,
  },
  projectImage: {
    width: '100%',
    height: 380,
    marginHorizontal:'50',
    borderRadius: 10,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: RFValue(18),
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: RFValue(14),
    color: 'white',
  },
  downloadButton: {
    backgroundColor: '#e4988d',
    padding: 10,
    marginHorizontal:50,
    borderRadius: 22,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#ffffff',
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginBottom: 4,
  },
  footer: {
    backgroundColor: 'black',
    paddingVertical: 20,
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: 'white',
    fontSize: RFValue(10),
    fontWeight: 'medium',
  },
});

export default App;
