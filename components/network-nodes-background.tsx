"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number[]
}

export default function NetworkNodesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configuration - Define nodes array before any functions that use it
    let nodes: Node[] = []
    const getNodeCount = () => Math.min(Math.floor((canvas.width * canvas.height) / 25000), 100)
    const getConnectionDistance = () => Math.min(canvas.width, canvas.height) * 0.2
    const maxConnections = 3 // Max connections per node

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate nodes when canvas is resized
      initializeNodes()
    }

    // Initialize nodes
    function initializeNodes() {
      // Clear existing nodes
      nodes = []

      const nodeCount = getNodeCount()
      const connectionDistance = getConnectionDistance()

      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 1.5 + 1 // Random radius between 1 and 2.5

        // Create node with random position and velocity
        const node: Node = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Random velocity
          vy: (Math.random() - 0.5) * 0.3,
          radius,
          connections: [],
        }

        nodes.push(node)
      }

      // Establish connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Calculate distances to all other nodes
        const distances: { index: number; distance: number }[] = []

        for (let j = 0; j < nodes.length; j++) {
          if (i !== j) {
            const otherNode = nodes[j]
            const dx = node.x - otherNode.x
            const dy = node.y - otherNode.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < connectionDistance) {
              distances.push({ index: j, distance })
            }
          }
        }

        // Sort by distance and take the closest ones
        distances.sort((a, b) => a.distance - b.distance)

        // Connect to closest nodes (up to maxConnections)
        const connectCount = Math.min(distances.length, maxConnections)
        for (let k = 0; k < connectCount; k++) {
          node.connections.push(distances[k].index)
        }
      }
    }

    // Apply resize and initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Update node positions
    function updateNodes() {
      const connectionDistance = getConnectionDistance()

      for (const node of nodes) {
        // Move node
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -1
        }

        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -1
        }

        // Keep node within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      }

      // Periodically recalculate connections as nodes move
      if (Math.random() < 0.01) {
        // 1% chance each frame
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          node.connections = []

          // Find new connections
          const distances: { index: number; distance: number }[] = []

          for (let j = 0; j < nodes.length; j++) {
            if (i !== j) {
              const otherNode = nodes[j]
              const dx = node.x - otherNode.x
              const dy = node.y - otherNode.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < connectionDistance) {
                distances.push({ index: j, distance })
              }
            }
          }

          // Sort and connect
          distances.sort((a, b) => a.distance - b.distance)
          const connectCount = Math.min(distances.length, maxConnections)
          for (let k = 0; k < connectCount; k++) {
            node.connections.push(distances[k].index)
          }
        }
      }
    }

    // Draw function
    function draw() {
      const connectionDistance = getConnectionDistance()

      // Clear canvas with semi-transparent background
      ctx.fillStyle =
        theme === "dark"
          ? "rgba(14, 22, 41, 0.1)" // Dark theme
          : "rgba(240, 245, 255, 0.1)" // Light theme
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (lines between nodes)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]

          // Calculate distance for opacity
          const dx = node.x - connectedNode.x
          const dy = node.y - connectedNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Line opacity based on distance
          const opacity = 1 - distance / connectionDistance

          // Draw line
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connectedNode.x, connectedNode.y)

          // Line color based on theme
          ctx.strokeStyle =
            theme === "dark"
              ? `rgba(251, 81, 118, ${opacity * 0.3})` // Primary color for dark theme
              : `rgba(251, 81, 118, ${opacity * 0.2})` // Primary color for light theme

          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Draw nodes (circles)
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)

        // Node color based on theme
        ctx.fillStyle =
          theme === "dark"
            ? "rgba(251, 81, 118, 0.6)" // Primary color for dark theme
            : "rgba(251, 81, 118, 0.5)" // Primary color for light theme

        ctx.fill()
      }
    }

    // Animation loop
    let animationId: number
    function animate() {
      updateNodes()
      draw()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" aria-hidden="true" />
  )
}
