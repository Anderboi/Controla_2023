export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          contact: string
          created_at: string | null
          user_id: string
        }
        Insert: {
          contact: string
          created_at?: string | null
          user_id: string
        }
        Update: {
          contact?: string
          created_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contacts_contact_fkey"
            columns: ["contact"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      engeneering_data: {
        Row: {
          conditioning: string[] | null
          electric: string[] | null
          heating: string[] | null
          plumbing: string[] | null
          project_id: number
        }
        Insert: {
          conditioning?: string[] | null
          electric?: string[] | null
          heating?: string[] | null
          plumbing?: string[] | null
          project_id?: number
        }
        Update: {
          conditioning?: string[] | null
          electric?: string[] | null
          heating?: string[] | null
          plumbing?: string[] | null
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "engeneering_data_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          }
        ]
      }
      favourite_projects: {
        Row: {
          created_at: string | null
          project_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          project_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          project_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favourite_projects_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "favourite_projects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      project_info: {
        Row: {
          created_at: string | null
          project_id: number
          purpose: string | null
          residing: number | null
          stage: number
          storeys: number
        }
        Insert: {
          created_at?: string | null
          project_id?: number
          purpose?: string | null
          residing?: number | null
          stage: number
          storeys?: number
        }
        Update: {
          created_at?: string | null
          project_id?: number
          purpose?: string | null
          residing?: number | null
          stage?: number
          storeys?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_info_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "project_info_stage_fkey"
            columns: ["stage"]
            referencedRelation: "project_stages"
            referencedColumns: ["id"]
          }
        ]
      }
      project_stages: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          address_city: string | null
          address_country: string | null
          address_street: string | null
          area: number | null
          client_id: string | null
          cover_img: string | null
          created_at: string | null
          project_id: number
          stage: string | null
          user_id: string | null
        }
        Insert: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          area?: number | null
          client_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          stage?: string | null
          user_id?: string | null
        }
        Update: {
          address_city?: string | null
          address_country?: string | null
          address_street?: string | null
          area?: number | null
          client_id?: string | null
          cover_img?: string | null
          created_at?: string | null
          project_id?: number
          stage?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      room_info: {
        Row: {
          area: number | null
          name: string
          project_id: number
          room_number: number
          storey: number
        }
        Insert: {
          area?: number | null
          name: string
          project_id: number
          room_number: number
          storey?: number
        }
        Update: {
          area?: number | null
          name?: string
          project_id?: number
          room_number?: number
          storey?: number
        }
        Relationships: [
          {
            foreignKeyName: "room_info_project_id_fkey"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          }
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          team_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          team_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_members_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          team_id: string
          team_name: string | null
        }
        Insert: {
          created_at?: string | null
          team_id: string
          team_name?: string | null
        }
        Update: {
          created_at?: string | null
          team_id?: string
          team_name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          email: string | null
          full_name: string | null
          id: string
          payment_method: Json | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          email?: string | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
