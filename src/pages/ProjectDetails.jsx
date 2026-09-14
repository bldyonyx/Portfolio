import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import projects from '../data/projects'
import projectDetailsContent from '../data/projectDetailsContent'

import ProjectHero from '../components/projectDetails/ProjectHero'
import ProjectEnd from '../components/projectDetails/ProjectEnd'
import BackToTopButton from '../components/projectDetails/BackToTopButton'
import ProjectShowcase from '../components/projects/ProjectShowcase'

function ProjectDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = projects.find(
    (project) => project.slug === slug
  )

  const [showBackToTop, setShowBackToTop] =
    useState(false)

  // ========================================
  // START PAGE AT THE TOP
  // ========================================

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // ========================================
  // BACK TO TOP VISIBILITY
  // ========================================

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 450)
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  // ========================================
  // PROJECT NOT FOUND
  // ========================================

  if (!project) {
    return (
      <main className="hero-dots flex min-h-screen items-center justify-center bg-dark px-6 text-paper">
        <div className="text-center">
          <p className="font-typewriter text-sm text-paper/60">
            Project not found.
          </p>

          <Link
            to="/"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              border
              border-paper/20
              bg-paper
              px-5
              py-3
              font-typewriter
              text-xs
              text-wine
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-pink
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.7}
              aria-hidden="true"
            />

            <span>
              back home
            </span>
          </Link>
        </div>
      </main>
    )
  }

  const copy =
    projectDetailsContent[project.slug]

  // ========================================
  // BACK TO PROJECTS
  // ========================================

  const goBackToProjects = () => {
    navigate('/')

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document
          .getElementById('projects')
          ?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      })
    })
  }

  // ========================================
  // BACK TO TOP
  // ========================================

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <main className="hero-dots min-h-screen bg-dark text-paper">

      {/* PROJECT HERO */}
      <ProjectHero
        project={project}
        copy={copy}
        onBackToProjects={goBackToProjects}
      />

      {/* PROJECT SHOWCASE */}
      <div className="px-6 lg:px-8">
        <ProjectShowcase
          slides={project.slides ?? []}
        />
      </div>

      {/* END OF PROJECT */}
      <ProjectEnd />

      {/* BACK TO TOP */}
      <BackToTopButton
        showBackToTop={showBackToTop}
        onClick={scrollToTop}
      />
    </main>
  )
}

export default ProjectDetails