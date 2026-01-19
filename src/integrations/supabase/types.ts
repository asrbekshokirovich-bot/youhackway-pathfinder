export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      application_milestones: {
        Row: {
          application_id: string
          completed_at: string | null
          created_at: string
          description: string | null
          id: string
          is_completed: boolean | null
          milestone_date: string
          milestone_type: string
          title: string
          updated_at: string
        }
        Insert: {
          application_id: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_completed?: boolean | null
          milestone_date: string
          milestone_type: string
          title: string
          updated_at?: string
        }
        Update: {
          application_id?: string
          completed_at?: string | null
          created_at?: string
          description?: string | null
          id?: string
          is_completed?: boolean | null
          milestone_date?: string
          milestone_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "application_milestones_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          counselor_id: string | null
          created_at: string
          id: string
          notes: string | null
          program: string | null
          program_id: string | null
          status: Database["public"]["Enums"]["application_status"]
          student_id: string
          university: string | null
          university_id: string | null
          updated_at: string
        }
        Insert: {
          counselor_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          program?: string | null
          program_id?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          student_id: string
          university?: string | null
          university_id?: string | null
          updated_at?: string
        }
        Update: {
          counselor_id?: string | null
          created_at?: string
          id?: string
          notes?: string | null
          program?: string | null
          program_id?: string | null
          status?: Database["public"]["Enums"]["application_status"]
          student_id?: string
          university?: string | null
          university_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_counselor_id_fkey"
            columns: ["counselor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_program_id_fkey"
            columns: ["program_id"]
            isOneToOne: false
            referencedRelation: "university_programs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      branches: {
        Row: {
          address: string | null
          city: string
          created_at: string | null
          id: string
          name: string
          phone: string | null
        }
        Insert: {
          address?: string | null
          city: string
          created_at?: string | null
          id?: string
          name: string
          phone?: string | null
        }
        Update: {
          address?: string | null
          city?: string
          created_at?: string | null
          id?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      call_records: {
        Row: {
          call_status: string | null
          created_at: string
          direction: string
          duration: number | null
          id: string
          notes: string | null
          office_location: string | null
          phone_number: string
          recording_url: string | null
          staff_id: string
          student_id: string | null
        }
        Insert: {
          call_status?: string | null
          created_at?: string
          direction: string
          duration?: number | null
          id?: string
          notes?: string | null
          office_location?: string | null
          phone_number: string
          recording_url?: string | null
          staff_id: string
          student_id?: string | null
        }
        Update: {
          call_status?: string | null
          created_at?: string
          direction?: string
          duration?: number | null
          id?: string
          notes?: string | null
          office_location?: string | null
          phone_number?: string
          recording_url?: string | null
          staff_id?: string
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "call_records_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_records_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      call_sessions: {
        Row: {
          call_type: string
          callee_chat_id: string | null
          callee_id: string | null
          caller_id: string
          created_at: string | null
          duration: number | null
          ended_at: string | null
          id: string
          recording_url: string | null
          session_id: string
          started_at: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          call_type: string
          callee_chat_id?: string | null
          callee_id?: string | null
          caller_id: string
          created_at?: string | null
          duration?: number | null
          ended_at?: string | null
          id?: string
          recording_url?: string | null
          session_id: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          call_type?: string
          callee_chat_id?: string | null
          callee_id?: string | null
          caller_id?: string
          created_at?: string | null
          duration?: number | null
          ended_at?: string | null
          id?: string
          recording_url?: string | null
          session_id?: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          created_at: string
          id: string
          linked_student_id: string | null
          linked_task_id: string | null
          mentioned_users: string[] | null
          message: string
          room_id: string
          sender_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          linked_student_id?: string | null
          linked_task_id?: string | null
          mentioned_users?: string[] | null
          message: string
          room_id: string
          sender_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          linked_student_id?: string | null
          linked_task_id?: string | null
          mentioned_users?: string[] | null
          message?: string
          room_id?: string
          sender_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_linked_student_id_fkey"
            columns: ["linked_student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_linked_task_id_fkey"
            columns: ["linked_task_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "chat_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_participants: {
        Row: {
          id: string
          joined_at: string
          last_read_at: string | null
          room_id: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string
          last_read_at?: string | null
          room_id: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string
          last_read_at?: string | null
          room_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_participants_room_id_fkey"
            columns: ["room_id"]
            isOneToOne: false
            referencedRelation: "chat_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_rooms: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          linked_student_id: string | null
          linked_task_id: string | null
          name: string
          room_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          linked_student_id?: string | null
          linked_task_id?: string | null
          name: string
          room_type?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          linked_student_id?: string | null
          linked_task_id?: string | null
          name?: string
          room_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_rooms_linked_student_id_fkey"
            columns: ["linked_student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_rooms_linked_task_id_fkey"
            columns: ["linked_task_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          author_id: string
          content: string
          created_at: string
          entity_id: string
          entity_type: string
          id: string
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          entity_id: string
          entity_type: string
          id?: string
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          entity_id?: string
          entity_type?: string
          id?: string
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      communications: {
        Row: {
          application_id: string | null
          created_at: string
          direction: string | null
          from_user_id: string | null
          id: string
          is_channel: boolean | null
          is_from_lead: boolean | null
          is_group: boolean | null
          is_read: boolean | null
          is_user: boolean | null
          media_url: string | null
          message: string
          message_id: string | null
          message_type: string | null
          platform: string | null
          platform_chat_id: string | null
          platform_user_id: string | null
          platform_username: string | null
          telegram_account_id: string | null
        }
        Insert: {
          application_id?: string | null
          created_at?: string
          direction?: string | null
          from_user_id?: string | null
          id?: string
          is_channel?: boolean | null
          is_from_lead?: boolean | null
          is_group?: boolean | null
          is_read?: boolean | null
          is_user?: boolean | null
          media_url?: string | null
          message: string
          message_id?: string | null
          message_type?: string | null
          platform?: string | null
          platform_chat_id?: string | null
          platform_user_id?: string | null
          platform_username?: string | null
          telegram_account_id?: string | null
        }
        Update: {
          application_id?: string | null
          created_at?: string
          direction?: string | null
          from_user_id?: string | null
          id?: string
          is_channel?: boolean | null
          is_from_lead?: boolean | null
          is_group?: boolean | null
          is_read?: boolean | null
          is_user?: boolean | null
          media_url?: string | null
          message?: string
          message_id?: string | null
          message_type?: string | null
          platform?: string | null
          platform_chat_id?: string | null
          platform_user_id?: string | null
          platform_username?: string | null
          telegram_account_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "communications_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "communications_from_user_id_fkey"
            columns: ["from_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "communications_telegram_account_id_fkey"
            columns: ["telegram_account_id"]
            isOneToOne: false
            referencedRelation: "telegram_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_items: {
        Row: {
          created_at: string
          delivery_id: string
          document_type: string
          id: string
          missing_reason: string | null
          status: Database["public"]["Enums"]["delivery_item_status"]
          student_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          delivery_id: string
          document_type: string
          id?: string
          missing_reason?: string | null
          status?: Database["public"]["Enums"]["delivery_item_status"]
          student_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          delivery_id?: string
          document_type?: string
          id?: string
          missing_reason?: string | null
          status?: Database["public"]["Enums"]["delivery_item_status"]
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_items_delivery_id_fkey"
            columns: ["delivery_id"]
            isOneToOne: false
            referencedRelation: "document_deliveries"
            referencedColumns: ["id"]
          },
        ]
      }
      document_access_log: {
        Row: {
          access_timestamp: string
          access_type: string
          accessed_by: string
          document_id: string
          id: string
          ip_address: unknown
          user_agent: string | null
        }
        Insert: {
          access_timestamp?: string
          access_type: string
          accessed_by: string
          document_id: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Update: {
          access_timestamp?: string
          access_type?: string
          accessed_by?: string
          document_id?: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Relationships: []
      }
      document_deliveries: {
        Row: {
          created_at: string
          created_by: string
          delivery_date: string | null
          id: string
          notes: string | null
          status: Database["public"]["Enums"]["delivery_status"]
          university_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          delivery_date?: string | null
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["delivery_status"]
          university_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          delivery_date?: string | null
          id?: string
          notes?: string | null
          status?: Database["public"]["Enums"]["delivery_status"]
          university_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_deliveries_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          application_id: string | null
          display_name: string | null
          document_type: string
          feedback: string | null
          file_url: string
          id: string
          status: Database["public"]["Enums"]["document_status"]
          student_id: string | null
          uploaded_at: string
        }
        Insert: {
          application_id?: string | null
          display_name?: string | null
          document_type: string
          feedback?: string | null
          file_url: string
          id?: string
          status?: Database["public"]["Enums"]["document_status"]
          student_id?: string | null
          uploaded_at?: string
        }
        Update: {
          application_id?: string | null
          display_name?: string | null
          document_type?: string
          feedback?: string | null
          file_url?: string
          id?: string
          status?: Database["public"]["Enums"]["document_status"]
          student_id?: string | null
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "documents_application_id_fkey"
            columns: ["application_id"]
            isOneToOne: false
            referencedRelation: "applications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_transactions: {
        Row: {
          amount: number
          branch_id: string | null
          category: string
          cheque_url: string | null
          created_at: string | null
          created_by: string
          description: string | null
          id: string
          payment_id: string | null
          status: string
          student_id: string | null
          transaction_date: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          branch_id?: string | null
          category: string
          cheque_url?: string | null
          created_at?: string | null
          created_by: string
          description?: string | null
          id?: string
          payment_id?: string | null
          status?: string
          student_id?: string | null
          transaction_date?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          branch_id?: string | null
          category?: string
          cheque_url?: string | null
          created_at?: string | null
          created_by?: string
          description?: string | null
          id?: string
          payment_id?: string | null
          status?: string
          student_id?: string | null
          transaction_date?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "finance_transactions_branch_id_fkey"
            columns: ["branch_id"]
            isOneToOne: false
            referencedRelation: "branches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_transactions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_transactions_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: true
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_transactions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      internal_notes: {
        Row: {
          author_id: string
          content: string
          created_at: string
          id: string
          is_important: boolean | null
          note_type: string | null
          student_id: string
          updated_at: string
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string
          id?: string
          is_important?: boolean | null
          note_type?: string | null
          student_id: string
          updated_at?: string
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string
          id?: string
          is_important?: boolean | null
          note_type?: string | null
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "internal_notes_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "internal_notes_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          category: string
          created_at: string | null
          description_en: string | null
          description_ko: string | null
          description_ru: string | null
          description_uz: string | null
          id: string
          is_active: boolean | null
          is_featured: boolean | null
          thumbnail_url: string | null
          title_en: string
          title_ko: string | null
          title_ru: string | null
          title_uz: string | null
          updated_at: string | null
          video_url: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          thumbnail_url?: string | null
          title_en: string
          title_ko?: string | null
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string | null
          video_url: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          is_active?: boolean | null
          is_featured?: boolean | null
          thumbnail_url?: string | null
          title_en?: string
          title_ko?: string | null
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string | null
          video_url?: string
        }
        Relationships: []
      }
      meeting_participants: {
        Row: {
          id: string
          joined_at: string | null
          left_at: string | null
          meeting_id: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string | null
          left_at?: string | null
          meeting_id: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string | null
          left_at?: string | null
          meeting_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meeting_participants_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meeting_rooms"
            referencedColumns: ["id"]
          },
        ]
      }
      meeting_rooms: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          ended_at: string | null
          id: string
          meeting_url: string | null
          name: string
          scheduled_at: string | null
          started_at: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          ended_at?: string | null
          id?: string
          meeting_url?: string | null
          name: string
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          ended_at?: string | null
          id?: string
          meeting_url?: string | null
          name?: string
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      mentions: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          is_read: boolean | null
          mentioned_user_id: string
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          mentioned_user_id: string
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          is_read?: boolean | null
          mentioned_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mentions_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mentions_mentioned_user_id_fkey"
            columns: ["mentioned_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          cheque_url: string | null
          commission_fee: number | null
          created_at: string
          created_by: string
          due_date: string | null
          id: string
          net_amount: number | null
          notes: string | null
          payment_date: string | null
          payment_method: string | null
          payment_type: Database["public"]["Enums"]["payment_type"]
          status: Database["public"]["Enums"]["payment_status"]
          student_id: string
          updated_at: string
        }
        Insert: {
          amount: number
          cheque_url?: string | null
          commission_fee?: number | null
          created_at?: string
          created_by: string
          due_date?: string | null
          id?: string
          net_amount?: number | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          payment_type: Database["public"]["Enums"]["payment_type"]
          status?: Database["public"]["Enums"]["payment_status"]
          student_id: string
          updated_at?: string
        }
        Update: {
          amount?: number
          cheque_url?: string | null
          commission_fee?: number | null
          created_at?: string
          created_by?: string
          due_date?: string | null
          id?: string
          net_amount?: number | null
          notes?: string | null
          payment_date?: string | null
          payment_method?: string | null
          payment_type?: Database["public"]["Enums"]["payment_type"]
          status?: Database["public"]["Enums"]["payment_status"]
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_access_log: {
        Row: {
          access_timestamp: string
          access_type: string
          accessed_by: string
          accessed_fields: string[] | null
          accessed_profile_id: string
          id: string
          ip_address: unknown
          user_agent: string | null
        }
        Insert: {
          access_timestamp?: string
          access_type: string
          accessed_by: string
          accessed_fields?: string[] | null
          accessed_profile_id: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Update: {
          access_timestamp?: string
          access_type?: string
          accessed_by?: string
          accessed_fields?: string[] | null
          accessed_profile_id?: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_access_log_accessed_profile_id_fkey"
            columns: ["accessed_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          assigned_manager_id: string | null
          birth_date: string | null
          contract_date: string | null
          converted_at: string | null
          created_at: string
          email: string
          final_payment_free: boolean | null
          full_name: string
          id: string
          initial_payment_free: boolean | null
          is_lead: boolean | null
          lead_source: string | null
          office_location: string | null
          passport_expiry: string | null
          passport_number: string | null
          phone: string | null
          phone_secondary: string | null
          plan: Database["public"]["Enums"]["payment_plan"] | null
          role: Database["public"]["Enums"]["app_role"]
          telegram_chat_id: string | null
          telegram_username: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          assigned_manager_id?: string | null
          birth_date?: string | null
          contract_date?: string | null
          converted_at?: string | null
          created_at?: string
          email: string
          final_payment_free?: boolean | null
          full_name: string
          id: string
          initial_payment_free?: boolean | null
          is_lead?: boolean | null
          lead_source?: string | null
          office_location?: string | null
          passport_expiry?: string | null
          passport_number?: string | null
          phone?: string | null
          phone_secondary?: string | null
          plan?: Database["public"]["Enums"]["payment_plan"] | null
          role?: Database["public"]["Enums"]["app_role"]
          telegram_chat_id?: string | null
          telegram_username?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          assigned_manager_id?: string | null
          birth_date?: string | null
          contract_date?: string | null
          converted_at?: string | null
          created_at?: string
          email?: string
          final_payment_free?: boolean | null
          full_name?: string
          id?: string
          initial_payment_free?: boolean | null
          is_lead?: boolean | null
          lead_source?: string | null
          office_location?: string | null
          passport_expiry?: string | null
          passport_number?: string | null
          phone?: string | null
          phone_secondary?: string | null
          plan?: Database["public"]["Enums"]["payment_plan"] | null
          role?: Database["public"]["Enums"]["app_role"]
          telegram_chat_id?: string | null
          telegram_username?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_assigned_manager_id_fkey"
            columns: ["assigned_manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      recording_access_log: {
        Row: {
          access_timestamp: string
          accessed_by: string
          call_record_id: string
          id: string
          ip_address: unknown
          user_agent: string | null
        }
        Insert: {
          access_timestamp?: string
          accessed_by: string
          call_record_id: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Update: {
          access_timestamp?: string
          accessed_by?: string
          call_record_id?: string
          id?: string
          ip_address?: unknown
          user_agent?: string | null
        }
        Relationships: []
      }
      reminders: {
        Row: {
          assigned_to: string
          completed_at: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string
          id: string
          priority: string | null
          status: string | null
          student_id: string | null
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to: string
          completed_at?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date: string
          id?: string
          priority?: string | null
          status?: string | null
          student_id?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string
          completed_at?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string
          id?: string
          priority?: string | null
          status?: string | null
          student_id?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reminders_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sensitive_access_log: {
        Row: {
          access_timestamp: string
          access_type: string
          accessed_by: string
          accessed_fields: string[] | null
          id: string
          ip_address: unknown
          resource_id: string | null
          resource_type: string
          user_agent: string | null
        }
        Insert: {
          access_timestamp?: string
          access_type: string
          accessed_by: string
          accessed_fields?: string[] | null
          id?: string
          ip_address?: unknown
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
        }
        Update: {
          access_timestamp?: string
          access_type?: string
          accessed_by?: string
          accessed_fields?: string[] | null
          id?: string
          ip_address?: unknown
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      showcase_videos: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          display_order: number | null
          duration: string
          id: string
          is_active: boolean | null
          thumbnail_url: string
          title_en: string
          title_ko: string | null
          title_ru: string | null
          title_uz: string | null
          updated_at: string
          video_file_path: string | null
          view_count: string | null
        }
        Insert: {
          category: string
          created_at?: string
          created_by?: string | null
          display_order?: number | null
          duration: string
          id?: string
          is_active?: boolean | null
          thumbnail_url: string
          title_en: string
          title_ko?: string | null
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string
          video_file_path?: string | null
          view_count?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          display_order?: number | null
          duration?: string
          id?: string
          is_active?: boolean | null
          thumbnail_url?: string
          title_en?: string
          title_ko?: string | null
          title_ru?: string | null
          title_uz?: string | null
          updated_at?: string
          video_file_path?: string | null
          view_count?: string | null
        }
        Relationships: []
      }
      student_details: {
        Row: {
          additional_certificates: string | null
          created_at: string
          education_level: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          emergency_contact_relation: string | null
          english_proficiency: string | null
          id: string
          korean_proficiency: string | null
          preferred_programs: string[] | null
          student_id: string
          target_country: string | null
          updated_at: string
        }
        Insert: {
          additional_certificates?: string | null
          created_at?: string
          education_level?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relation?: string | null
          english_proficiency?: string | null
          id?: string
          korean_proficiency?: string | null
          preferred_programs?: string[] | null
          student_id: string
          target_country?: string | null
          updated_at?: string
        }
        Update: {
          additional_certificates?: string | null
          created_at?: string
          education_level?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          emergency_contact_relation?: string | null
          english_proficiency?: string | null
          id?: string
          korean_proficiency?: string | null
          preferred_programs?: string[] | null
          student_id?: string
          target_country?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_details_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      student_status_tracking: {
        Row: {
          admission_letter_received: boolean | null
          admission_letter_received_at: string | null
          apostille_ready: boolean | null
          apostille_ready_at: string | null
          application_submitted: boolean | null
          application_submitted_at: string | null
          created_at: string | null
          documents_collected: boolean | null
          documents_collected_at: string | null
          documents_translated: boolean | null
          documents_translated_at: string | null
          full_payment_completed: boolean | null
          full_payment_completed_at: string | null
          id: string
          initial_payment_paid: boolean | null
          initial_payment_paid_at: string | null
          last_updated_by: string | null
          student_id: string
          tuition_paid: boolean | null
          tuition_paid_at: string | null
          updated_at: string | null
          visa_applied: boolean | null
          visa_applied_at: string | null
          visa_documents_ready: boolean | null
          visa_documents_ready_at: string | null
        }
        Insert: {
          admission_letter_received?: boolean | null
          admission_letter_received_at?: string | null
          apostille_ready?: boolean | null
          apostille_ready_at?: string | null
          application_submitted?: boolean | null
          application_submitted_at?: string | null
          created_at?: string | null
          documents_collected?: boolean | null
          documents_collected_at?: string | null
          documents_translated?: boolean | null
          documents_translated_at?: string | null
          full_payment_completed?: boolean | null
          full_payment_completed_at?: string | null
          id?: string
          initial_payment_paid?: boolean | null
          initial_payment_paid_at?: string | null
          last_updated_by?: string | null
          student_id: string
          tuition_paid?: boolean | null
          tuition_paid_at?: string | null
          updated_at?: string | null
          visa_applied?: boolean | null
          visa_applied_at?: string | null
          visa_documents_ready?: boolean | null
          visa_documents_ready_at?: string | null
        }
        Update: {
          admission_letter_received?: boolean | null
          admission_letter_received_at?: string | null
          apostille_ready?: boolean | null
          apostille_ready_at?: string | null
          application_submitted?: boolean | null
          application_submitted_at?: string | null
          created_at?: string | null
          documents_collected?: boolean | null
          documents_collected_at?: string | null
          documents_translated?: boolean | null
          documents_translated_at?: string | null
          full_payment_completed?: boolean | null
          full_payment_completed_at?: string | null
          id?: string
          initial_payment_paid?: boolean | null
          initial_payment_paid_at?: string | null
          last_updated_by?: string | null
          student_id?: string
          tuition_paid?: boolean | null
          tuition_paid_at?: string | null
          updated_at?: string | null
          visa_applied?: boolean | null
          visa_applied_at?: string | null
          visa_documents_ready?: boolean | null
          visa_documents_ready_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_status_tracking_last_updated_by_fkey"
            columns: ["last_updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_status_tracking_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subtasks: {
        Row: {
          completed_at: string | null
          completed_by: string | null
          created_at: string | null
          description: string | null
          id: string
          is_completed: boolean | null
          parent_task_id: string
          title: string
          updated_at: string | null
        }
        Insert: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_completed?: boolean | null
          parent_task_id: string
          title: string
          updated_at?: string | null
        }
        Update: {
          completed_at?: string | null
          completed_by?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_completed?: boolean | null
          parent_task_id?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subtasks_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subtasks_parent_task_id_fkey"
            columns: ["parent_task_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
        ]
      }
      task_assignees: {
        Row: {
          created_at: string | null
          id: string
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_assignees_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_assignees_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      telegram_accounts: {
        Row: {
          account_name: string
          account_type: Database["public"]["Enums"]["telegram_account_type"]
          bot_token_secret_name: string
          client_server_url: string | null
          created_at: string
          display_name: string | null
          id: string
          is_active: boolean | null
          is_authenticated: boolean | null
          last_connected_at: string | null
          phone_number: string | null
          profile_id: string | null
          session_string: string | null
          updated_at: string
          username: string | null
        }
        Insert: {
          account_name: string
          account_type?: Database["public"]["Enums"]["telegram_account_type"]
          bot_token_secret_name: string
          client_server_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_active?: boolean | null
          is_authenticated?: boolean | null
          last_connected_at?: string | null
          phone_number?: string | null
          profile_id?: string | null
          session_string?: string | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          account_name?: string
          account_type?: Database["public"]["Enums"]["telegram_account_type"]
          bot_token_secret_name?: string
          client_server_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          is_active?: boolean | null
          is_authenticated?: boolean | null
          last_connected_at?: string | null
          phone_number?: string | null
          profile_id?: string | null
          session_string?: string | null
          updated_at?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "telegram_accounts_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      universities: {
        Row: {
          admission_letter_date: string | null
          admission_requirements_en: string | null
          admission_requirements_ko: string | null
          admission_requirements_ru: string | null
          admission_requirements_uz: string | null
          admission_test_type: string | null
          application_end_date: string | null
          application_form_pdf_url: string | null
          application_start_date: string | null
          city: string | null
          created_at: string | null
          description_en: string | null
          description_ko: string | null
          description_ru: string | null
          description_uz: string | null
          id: string
          interview_date: string | null
          is_active: boolean | null
          logo_url: string | null
          min_ielts_score: number | null
          min_topik_score: number | null
          name_en: string
          name_ko: string | null
          name_ru: string | null
          name_uz: string | null
          offline_application_end_date: string | null
          offline_application_start_date: string | null
          online_application_end_date: string | null
          online_application_start_date: string | null
          ranking: number | null
          results_announcement_date: string | null
          tuition_max: number | null
          tuition_min: number | null
          tuition_payment_deadline: string | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          admission_letter_date?: string | null
          admission_requirements_en?: string | null
          admission_requirements_ko?: string | null
          admission_requirements_ru?: string | null
          admission_requirements_uz?: string | null
          admission_test_type?: string | null
          application_end_date?: string | null
          application_form_pdf_url?: string | null
          application_start_date?: string | null
          city?: string | null
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          interview_date?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          name_en: string
          name_ko?: string | null
          name_ru?: string | null
          name_uz?: string | null
          offline_application_end_date?: string | null
          offline_application_start_date?: string | null
          online_application_end_date?: string | null
          online_application_start_date?: string | null
          ranking?: number | null
          results_announcement_date?: string | null
          tuition_max?: number | null
          tuition_min?: number | null
          tuition_payment_deadline?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          admission_letter_date?: string | null
          admission_requirements_en?: string | null
          admission_requirements_ko?: string | null
          admission_requirements_ru?: string | null
          admission_requirements_uz?: string | null
          admission_test_type?: string | null
          application_end_date?: string | null
          application_form_pdf_url?: string | null
          application_start_date?: string | null
          city?: string | null
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          interview_date?: string | null
          is_active?: boolean | null
          logo_url?: string | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          name_en?: string
          name_ko?: string | null
          name_ru?: string | null
          name_uz?: string | null
          offline_application_end_date?: string | null
          offline_application_start_date?: string | null
          online_application_end_date?: string | null
          online_application_start_date?: string | null
          ranking?: number | null
          results_announcement_date?: string | null
          tuition_max?: number | null
          tuition_min?: number | null
          tuition_payment_deadline?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      university_milestones: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_mandatory: boolean | null
          milestone_date: string
          milestone_type: string
          title: string
          university_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_mandatory?: boolean | null
          milestone_date: string
          milestone_type: string
          title: string
          university_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_mandatory?: boolean | null
          milestone_date?: string
          milestone_type?: string
          title?: string
          university_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "university_milestones_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      university_programs: {
        Row: {
          admission_letter_date: string | null
          admission_test_type: string | null
          application_end_date: string | null
          application_start_date: string | null
          created_at: string | null
          degree_level: string | null
          description_en: string | null
          description_ko: string | null
          description_ru: string | null
          description_uz: string | null
          duration_years: number | null
          faculty: string
          id: string
          interview_date: string | null
          is_active: boolean | null
          min_gpa: number | null
          min_ielts_score: number | null
          min_topik_score: number | null
          offline_application_end_date: string | null
          offline_application_start_date: string | null
          online_application_end_date: string | null
          online_application_start_date: string | null
          program_name_en: string
          program_name_ko: string | null
          program_name_ru: string | null
          program_name_uz: string | null
          results_announcement_date: string | null
          tuition_fee: number
          tuition_payment_deadline: string | null
          university_id: string
          updated_at: string | null
        }
        Insert: {
          admission_letter_date?: string | null
          admission_test_type?: string | null
          application_end_date?: string | null
          application_start_date?: string | null
          created_at?: string | null
          degree_level?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          duration_years?: number | null
          faculty: string
          id?: string
          interview_date?: string | null
          is_active?: boolean | null
          min_gpa?: number | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          offline_application_end_date?: string | null
          offline_application_start_date?: string | null
          online_application_end_date?: string | null
          online_application_start_date?: string | null
          program_name_en: string
          program_name_ko?: string | null
          program_name_ru?: string | null
          program_name_uz?: string | null
          results_announcement_date?: string | null
          tuition_fee: number
          tuition_payment_deadline?: string | null
          university_id: string
          updated_at?: string | null
        }
        Update: {
          admission_letter_date?: string | null
          admission_test_type?: string | null
          application_end_date?: string | null
          application_start_date?: string | null
          created_at?: string | null
          degree_level?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          duration_years?: number | null
          faculty?: string
          id?: string
          interview_date?: string | null
          is_active?: boolean | null
          min_gpa?: number | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          offline_application_end_date?: string | null
          offline_application_start_date?: string | null
          online_application_end_date?: string | null
          online_application_start_date?: string | null
          program_name_en?: string
          program_name_ko?: string | null
          program_name_ru?: string | null
          program_name_uz?: string | null
          results_announcement_date?: string | null
          tuition_fee?: number
          tuition_payment_deadline?: string | null
          university_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "university_programs_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      university_scholarships: {
        Row: {
          created_at: string | null
          description_en: string | null
          description_ko: string | null
          description_ru: string | null
          description_uz: string | null
          id: string
          is_active: boolean | null
          min_ielts_score: number | null
          min_topik_score: number | null
          scholarship_name_en: string
          scholarship_name_ko: string | null
          scholarship_name_ru: string | null
          scholarship_name_uz: string | null
          scholarship_percentage: number
          test_type: string
          university_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          is_active?: boolean | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          scholarship_name_en: string
          scholarship_name_ko?: string | null
          scholarship_name_ru?: string | null
          scholarship_name_uz?: string | null
          scholarship_percentage: number
          test_type: string
          university_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description_en?: string | null
          description_ko?: string | null
          description_ru?: string | null
          description_uz?: string | null
          id?: string
          is_active?: boolean | null
          min_ielts_score?: number | null
          min_topik_score?: number | null
          scholarship_name_en?: string
          scholarship_name_ko?: string | null
          scholarship_name_ru?: string | null
          scholarship_name_uz?: string | null
          scholarship_percentage?: number
          test_type?: string
          university_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "university_scholarships_university_id_fkey"
            columns: ["university_id"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_payment_commission: {
        Args: { p_amount: number; p_payment_method: string }
        Returns: {
          commission_fee: number
          net_amount: number
        }[]
      }
      can_view_sensitive_profile_data: { Args: never; Returns: boolean }
      decrypt_sensitive_data: {
        Args: { encrypted_data: string }
        Returns: string
      }
      encrypt_sensitive_data: { Args: { data: string }; Returns: string }
      get_call_record_with_logging: {
        Args: { record_id: string }
        Returns: {
          call_status: string | null
          created_at: string
          direction: string
          duration: number | null
          id: string
          notes: string | null
          office_location: string | null
          phone_number: string
          recording_url: string | null
          staff_id: string
          student_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "call_records"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      log_profile_access: {
        Args: {
          p_access_type: string
          p_fields?: string[]
          p_profile_id: string
        }
        Returns: undefined
      }
      log_sensitive_access: {
        Args: {
          p_access_type: string
          p_accessed_fields?: string[]
          p_resource_id?: string
          p_resource_type: string
        }
        Returns: undefined
      }
      owner_exists: { Args: never; Returns: boolean }
    }
    Enums: {
      app_role:
        | "owner"
        | "admin"
        | "documentation_specialist"
        | "translation_specialist"
        | "student"
        | "administrator"
        | "manager"
        | "counselor"
        | "marketer"
        | "developer"
        | "accounter"
      application_status:
        | "inquiry"
        | "application_submitted"
        | "documents_pending"
        | "under_review"
        | "offer_received"
        | "visa_applied"
        | "visa_approved"
        | "completed"
        | "rejected"
      delivery_item_status: "pending" | "sent" | "missing"
      delivery_status: "pending" | "in_progress" | "completed" | "cancelled"
      document_status: "pending" | "approved" | "needs_correction"
      payment_plan: "comfort" | "special" | "vip" | "free"
      payment_status: "pending" | "paid" | "overdue" | "refunded"
      payment_type: "initial" | "post_acceptance" | "refund"
      telegram_account_type: "bot" | "personal"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: [
        "owner",
        "admin",
        "documentation_specialist",
        "translation_specialist",
        "student",
        "administrator",
        "manager",
        "counselor",
        "marketer",
        "developer",
        "accounter",
      ],
      application_status: [
        "inquiry",
        "application_submitted",
        "documents_pending",
        "under_review",
        "offer_received",
        "visa_applied",
        "visa_approved",
        "completed",
        "rejected",
      ],
      delivery_item_status: ["pending", "sent", "missing"],
      delivery_status: ["pending", "in_progress", "completed", "cancelled"],
      document_status: ["pending", "approved", "needs_correction"],
      payment_plan: ["comfort", "special", "vip", "free"],
      payment_status: ["pending", "paid", "overdue", "refunded"],
      payment_type: ["initial", "post_acceptance", "refund"],
      telegram_account_type: ["bot", "personal"],
    },
  },
} as const
