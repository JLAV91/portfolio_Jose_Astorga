import { useRef } from 'react';
import type { ComponentType } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Header } from '@/components/layout/Header';

import { AboutSection } from '@/features/about/AboutSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { EducationSection } from '@/features/education/EducationSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { HeroSection } from '@/features/home/HeroSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';

import { colors } from '@/theme';
import type { SectionId } from '@/types/navigation';

type HomeSection = {
  id: SectionId;
  component: ComponentType;
};

const sections: HomeSection[] = [
  { id: 'home', component: HeroSection },
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
      <Header onNavigate={scrollToSection} />

      <ScrollView
        ref={scrollRef}
        style={styles.scroll}
      >
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