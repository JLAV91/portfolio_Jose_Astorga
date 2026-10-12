import { useRef } from 'react';
import type { ComponentType } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { PageMetadata } from '@/components/ui/PageMetadata';
import { AboutSection } from '@/features/about/AboutSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { EducationSection } from '@/features/education/EducationSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { HeroSection } from '@/features/home/HeroSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { TechnologyStrip } from '@/features/home/TechnologyStrip';

import { colors } from '@/theme';
import type { SectionId } from '@/types/navigation';

type HomeSection = {
  id: SectionId;
  component: ComponentType;
};

const sections: HomeSection[] = [
  { id: 'about', component: AboutSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'education', component: EducationSection },
  { id: 'experience', component: ExperienceSection },
  { id: 'contact', component: ContactSection },
];

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);

  const sectionPositions = useRef<
    Partial<Record<SectionId, number>>
  >({});

  function scrollToSection(section: SectionId) {
    const position = sectionPositions.current[section];

    if (position === undefined) {
      return;
    }

    scrollRef.current?.scrollTo({
      y: position,
      animated: true,
    });
  }

  return (
    <View style={styles.page}>
      <PageMetadata
        title="José Astorga Varas | Software Developer"
        description="Portafolio de José Astorga Varas. Experiencia en desarrollo backend y web, proyectos y enfoque en aplicaciones móviles."
      />
      <Header onNavigate={scrollToSection} />

      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
      >
        <View
          onLayout={(event) => {
            sectionPositions.current.home =
              event.nativeEvent.layout.y;
          }}
        >
          <HeroSection onNavigate={scrollToSection} />
        </View>

        <TechnologyStrip />

        {sections.map(({ id, component: Section }) => (
          <View
            key={id}
            onLayout={(event) => {
              sectionPositions.current[id] =
                event.nativeEvent.layout.y;
            }}
          >
            <Section />
          </View>
        ))}

        <Footer />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
});