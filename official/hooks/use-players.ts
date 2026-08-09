import useSWR from "swr"
import type { Player } from "@/lib/types"
import { playerApi } from "@/lib/api-client"

export function usePlayers(limit?: number) {
  const { data, error, isLoading } = useSWR<Player[]>(limit ? ["/api/players", limit] : "/api/players", () =>
    playerApi.getPlayers(limit),
  )

  return {
    players: data,
    isLoading,
    isError: error,
  }
}

export function usePlayer(id: string) {
  const { data, error, isLoading } = useSWR<Player>(id ? `/api/players/${id}` : null, () => playerApi.getPlayer(id))

  return {
    player: data,
    isLoading,
    isError: error,
  }
}
