import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import lsKeys from "@/lib/constants/lsKeys"

export const useLastVisitedPage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [lastPage, setLastPage] = useState<string | null>(null)

  // Check if code is running on client side
  const isClient = typeof window !== "undefined"

  // Save current path whenever it changes
  useEffect(() => {
    if (!isClient) return

    const currentPath = pathname
    // Don't save certain paths
    const IGNORED_PATHS = ["/onboarding", "/", "/404"]
    const IGNORED_PATHS_WITH = ["/onboarding"]
    console.log({ IGNORED_PATHS, currentPath, IGNORED_PATHS_WITH })
    if (
      !IGNORED_PATHS.includes(currentPath) &&
      !IGNORED_PATHS_WITH.some((path) => currentPath.startsWith(path))
    ) {
      sessionStorage.setItem(lsKeys.lastVisitedPage, currentPath)
      setLastPage(currentPath)
    }
  }, [pathname, isClient])

  // Redirect to last visited page
  const redirectToLastPage = (fallback: string = "/dashboard") => {
    if (!isClient) return

    const savedPage = sessionStorage.getItem(lsKeys.lastVisitedPage)
    router.push(savedPage || fallback)
  }

  // Get last page without redirecting
  const getLastPage = (): string | null => {
    if (!isClient) return null
    return sessionStorage.getItem(lsKeys.lastVisitedPage)
  }

  // clear
  const clearLastPage = () => {
    sessionStorage.removeItem(lsKeys.lastVisitedPage)
  }

  return { lastPage, redirectToLastPage, getLastPage, clearLastPage }
}
