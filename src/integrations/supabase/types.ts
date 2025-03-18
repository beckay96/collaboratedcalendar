export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievement_goals: {
        Row: {
          achieved: boolean | null
          achievement: string | null
          created_at: string
          emoji: string | null
          id: number
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          user: string | null
        }
        Insert: {
          achieved?: boolean | null
          achievement?: string | null
          created_at?: string
          emoji?: string | null
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          user?: string | null
        }
        Update: {
          achieved?: boolean | null
          achievement?: string | null
          created_at?: string
          emoji?: string | null
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          user?: string | null
        }
        Relationships: []
      }
      achievement_suggestions: {
        Row: {
          achievement: string
          emoji: string
          id: number
          treasure_name: Database["public"]["Enums"]["treasure_types"]
        }
        Insert: {
          achievement: string
          emoji: string
          id?: number
          treasure_name: Database["public"]["Enums"]["treasure_types"]
        }
        Update: {
          achievement?: string
          emoji?: string
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"]
        }
        Relationships: []
      }
      active_days_streaks: {
        Row: {
          day_tracked: string
          id: number
          user_id: string
        }
        Insert: {
          day_tracked: string
          id?: number
          user_id: string
        }
        Update: {
          day_tracked?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      activity_suggestions: {
        Row: {
          description: string | null
          id: number
          name: string | null
          tags: string[] | null
        }
        Insert: {
          description?: string | null
          id?: number
          name?: string | null
          tags?: string[] | null
        }
        Update: {
          description?: string | null
          id?: number
          name?: string | null
          tags?: string[] | null
        }
        Relationships: []
      }
      affirmation_suggestions: {
        Row: {
          affirmation: string | null
          created_at: string
          id: number
        }
        Insert: {
          affirmation?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          affirmation?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      ai_student_insights: {
        Row: {
          academic_insights: string | null
          behaviour_insights: string | null
          emotional_insights: string | null
          engagement_insights: string | null
          generated_at: string
          health_insights: string | null
          id: number
          recommended_interventions: string | null
          student_id: string
        }
        Insert: {
          academic_insights?: string | null
          behaviour_insights?: string | null
          emotional_insights?: string | null
          engagement_insights?: string | null
          generated_at?: string
          health_insights?: string | null
          id?: number
          recommended_interventions?: string | null
          student_id: string
        }
        Update: {
          academic_insights?: string | null
          behaviour_insights?: string | null
          emotional_insights?: string | null
          engagement_insights?: string | null
          generated_at?: string
          health_insights?: string | null
          id?: number
          recommended_interventions?: string | null
          student_id?: string
        }
        Relationships: []
      }
      art_created_by_users: {
        Row: {
          art_url: string | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          art_url?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          art_url?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      attendance_archway: {
        Row: {
          attendance_type: string | null
          check_in_time: string | null
          check_out_time: string | null
          created_at: string
          id: number
          is_absent: boolean
          notes: string | null
          role_in_school: string | null
          school: number | null
          user: string | null
        }
        Insert: {
          attendance_type?: string | null
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string
          id?: number
          is_absent?: boolean
          notes?: string | null
          role_in_school?: string | null
          school?: number | null
          user?: string | null
        }
        Update: {
          attendance_type?: string | null
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string
          id?: number
          is_absent?: boolean
          notes?: string | null
          role_in_school?: string | null
          school?: number | null
          user?: string | null
        }
        Relationships: []
      }
      attendance_types: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          type_name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          type_name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          type_name?: string
        }
        Relationships: []
      }
      avatars: {
        Row: {
          description: string | null
          id: number
          img_url: string | null
          level_to_view: number | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          img_url?: string | null
          level_to_view?: number | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          img_url?: string | null
          level_to_view?: number | null
          name?: string | null
        }
        Relationships: []
      }
      badges: {
        Row: {
          badge_description: string | null
          badge_name: string | null
          badge_type: string | null
          emoji: string
          id: number
          threshold: number
          treasure_type: Database["public"]["Enums"]["treasure_types"] | null
        }
        Insert: {
          badge_description?: string | null
          badge_name?: string | null
          badge_type?: string | null
          emoji: string
          id?: number
          threshold: number
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
        }
        Update: {
          badge_description?: string | null
          badge_name?: string | null
          badge_type?: string | null
          emoji?: string
          id?: number
          threshold?: number
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
        }
        Relationships: []
      }
      behaviour_info: {
        Row: {
          additional_factors: string | null
          behaviour_displayed: string | null
          created_at: string
          environment: string | null
          id: number
          logged_by: string | null
          neg_to_positive_scale: number | null
          student: string | null
        }
        Insert: {
          additional_factors?: string | null
          behaviour_displayed?: string | null
          created_at?: string
          environment?: string | null
          id?: number
          logged_by?: string | null
          neg_to_positive_scale?: number | null
          student?: string | null
        }
        Update: {
          additional_factors?: string | null
          behaviour_displayed?: string | null
          created_at?: string
          environment?: string | null
          id?: number
          logged_by?: string | null
          neg_to_positive_scale?: number | null
          student?: string | null
        }
        Relationships: []
      }
      chat_message_users: {
        Row: {
          chat_message_id: number
          id: number
          read_at: string | null
          user_id: string
        }
        Insert: {
          chat_message_id: number
          id?: number
          read_at?: string | null
          user_id: string
        }
        Update: {
          chat_message_id?: number
          id?: number
          read_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_message_users_message_fkey"
            columns: ["chat_message_id"]
            isOneToOne: false
            referencedRelation: "chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          chat_id: number
          created_at: string
          file_urls: number[] | null
          id: number
          message: string
          user_id: string
        }
        Insert: {
          chat_id: number
          created_at?: string
          file_urls?: number[] | null
          id?: number
          message: string
          user_id: string
        }
        Update: {
          chat_id?: number
          created_at?: string
          file_urls?: number[] | null
          id?: number
          message?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_chat_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
        ]
      }
      chats: {
        Row: {
          chat_emoji: string | null
          chat_name: string
          created_at: string
          id: number
          number_of_users_total: number | null
          read_status: boolean | null
          user_ids: string[] | null
        }
        Insert: {
          chat_emoji?: string | null
          chat_name: string
          created_at?: string
          id?: number
          number_of_users_total?: number | null
          read_status?: boolean | null
          user_ids?: string[] | null
        }
        Update: {
          chat_emoji?: string | null
          chat_name?: string
          created_at?: string
          id?: number
          number_of_users_total?: number | null
          read_status?: boolean | null
          user_ids?: string[] | null
        }
        Relationships: []
      }
      class_compass: {
        Row: {
          class_average_grade: number | null
          class_date_year: string | null
          class_name: string | null
          created_at: string
          created_by: string | null
          date_of_next_lesson: string | null
          grade_level: number | null
          id: number
          school: number | null
        }
        Insert: {
          class_average_grade?: number | null
          class_date_year?: string | null
          class_name?: string | null
          created_at?: string
          created_by?: string | null
          date_of_next_lesson?: string | null
          grade_level?: number | null
          id?: number
          school?: number | null
        }
        Update: {
          class_average_grade?: number | null
          class_date_year?: string | null
          class_name?: string | null
          created_at?: string
          created_by?: string | null
          date_of_next_lesson?: string | null
          grade_level?: number | null
          id?: number
          school?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "class_compass_grade_level_fkey"
            columns: ["grade_level"]
            isOneToOne: false
            referencedRelation: "grade_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classcompass_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "classcompass_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      class_lesson_plans: {
        Row: {
          all_complete: boolean | null
          class_id: number | null
          created_at: string
          description: string | null
          due_date: string | null
          emoji: string | null
          id: number
          lessons: number[] | null
          percentage_complete: number | null
          percentage_graded: number | null
          start_time: string | null
          subject: number | null
          teacher: string | null
        }
        Insert: {
          all_complete?: boolean | null
          class_id?: number | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          id?: number
          lessons?: number[] | null
          percentage_complete?: number | null
          percentage_graded?: number | null
          start_time?: string | null
          subject?: number | null
          teacher?: string | null
        }
        Update: {
          all_complete?: boolean | null
          class_id?: number | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          id?: number
          lessons?: number[] | null
          percentage_complete?: number | null
          percentage_graded?: number | null
          start_time?: string | null
          subject?: number | null
          teacher?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "class_lesson_plans_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_lesson_plans_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "class_lesson_plans_teacher_fkey"
            columns: ["teacher"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "class_lesson_plans_teacher_fkey"
            columns: ["teacher"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      class_subject_averages: {
        Row: {
          average_grade: number
          class_id: number
          last_updated: string | null
          subject_id: number
        }
        Insert: {
          average_grade: number
          class_id: number
          last_updated?: string | null
          subject_id: number
        }
        Update: {
          average_grade?: number
          class_id?: number
          last_updated?: string | null
          subject_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "class_subject_averages_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_subject_averages_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "class_subject_averages_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      communication_stations: {
        Row: {
          conversation_type: number | null
          created_at: string
          id: number
          time_finished: string | null
        }
        Insert: {
          conversation_type?: number | null
          created_at?: string
          id?: number
          time_finished?: string | null
        }
        Update: {
          conversation_type?: number | null
          created_at?: string
          id?: number
          time_finished?: string | null
        }
        Relationships: []
      }
      compliment_suggestions: {
        Row: {
          id: number
          suggested_compliment: string | null
        }
        Insert: {
          id?: number
          suggested_compliment?: string | null
        }
        Update: {
          id?: number
          suggested_compliment?: string | null
        }
        Relationships: []
      }
      compliments: {
        Row: {
          author: string | null
          compliment: string | null
          created_at: string
          id: number
          user_sent_to: string | null
        }
        Insert: {
          author?: string | null
          compliment?: string | null
          created_at?: string
          id?: number
          user_sent_to?: string | null
        }
        Update: {
          author?: string | null
          compliment?: string | null
          created_at?: string
          id?: number
          user_sent_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "compliments_user_sent_to_fkey"
            columns: ["user_sent_to"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "compliments_user_sent_to_fkey"
            columns: ["user_sent_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      consequests: {
        Row: {
          consequest_description: string
          consequest_title: string
          conversation_type: string
          id: number
          treasure_name: Database["public"]["Enums"]["treasure_types"]
          treasure_value: number | null
        }
        Insert: {
          consequest_description: string
          consequest_title: string
          conversation_type: string
          id?: number
          treasure_name: Database["public"]["Enums"]["treasure_types"]
          treasure_value?: number | null
        }
        Update: {
          consequest_description?: string
          consequest_title?: string
          conversation_type?: string
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"]
          treasure_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "consequests_conversation_type_fkey"
            columns: ["conversation_type"]
            isOneToOne: false
            referencedRelation: "conversation_types"
            referencedColumns: ["conversation_type"]
          },
        ]
      }
      conversation_prompts: {
        Row: {
          conversation_type: string
          conversation_type_prompts: string
          id: number
        }
        Insert: {
          conversation_type: string
          conversation_type_prompts: string
          id?: never
        }
        Update: {
          conversation_type?: string
          conversation_type_prompts?: string
          id?: never
        }
        Relationships: [
          {
            foreignKeyName: "conversation_prompts_conversation_type_fkey"
            columns: ["conversation_type"]
            isOneToOne: false
            referencedRelation: "conversation_types"
            referencedColumns: ["conversation_type"]
          },
        ]
      }
      conversation_types: {
        Row: {
          conversation_type: string
          conversation_type_categories: string | null
          conversation_type_subcategories: string | null
          description: string
          id: number
        }
        Insert: {
          conversation_type: string
          conversation_type_categories?: string | null
          conversation_type_subcategories?: string | null
          description: string
          id?: number
        }
        Update: {
          conversation_type?: string
          conversation_type_categories?: string | null
          conversation_type_subcategories?: string | null
          description?: string
          id?: number
        }
        Relationships: []
      }
      daily_emotion_averages: {
        Row: {
          average_positivity: number
          date: string
          most_frequent_emotion_emoji: string | null
          most_frequent_emotion_name: string | null
          user_id: string
        }
        Insert: {
          average_positivity?: number
          date: string
          most_frequent_emotion_emoji?: string | null
          most_frequent_emotion_name?: string | null
          user_id: string
        }
        Update: {
          average_positivity?: number
          date?: string
          most_frequent_emotion_emoji?: string | null
          most_frequent_emotion_name?: string | null
          user_id?: string
        }
        Relationships: []
      }
      daily_grade_logs: {
        Row: {
          class_id: number
          created_at: string
          grade_average: number
          id: number
          log_date: string
          school_id: number
          subject_id: number | null
        }
        Insert: {
          class_id: number
          created_at?: string
          grade_average: number
          id?: number
          log_date: string
          school_id: number
          subject_id?: number | null
        }
        Update: {
          class_id?: number
          created_at?: string
          grade_average?: number
          id?: number
          log_date?: string
          school_id?: number
          subject_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_grade_logs_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_grade_logs_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "daily_grade_logs_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "daily_grade_logs_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_grade_logs_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_points_tracking: {
        Row: {
          date: string
          points_earned: number
          user_id: string
        }
        Insert: {
          date: string
          points_earned?: number
          user_id: string
        }
        Update: {
          date?: string
          points_earned?: number
          user_id?: string
        }
        Relationships: []
      }
      daily_positivity_summary: {
        Row: {
          avg_positivity_scale: number
          created_at: string
          date: string
          id: number
          positivity_percentage_change: string
          user_id: string
        }
        Insert: {
          avg_positivity_scale?: number
          created_at?: string
          date?: string
          id?: number
          positivity_percentage_change?: string
          user_id: string
        }
        Update: {
          avg_positivity_scale?: number
          created_at?: string
          date?: string
          id?: number
          positivity_percentage_change?: string
          user_id?: string
        }
        Relationships: []
      }
      debug_logs: {
        Row: {
          error_message: string | null
          function_name: string | null
          id: number
          log_time: string | null
        }
        Insert: {
          error_message?: string | null
          function_name?: string | null
          id?: number
          log_time?: string | null
        }
        Update: {
          error_message?: string | null
          function_name?: string | null
          id?: number
          log_time?: string | null
        }
        Relationships: []
      }
      differentiation_methods: {
        Row: {
          id: number
          method_name: string
          snippet_types_matching:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
        }
        Insert: {
          id?: never
          method_name: string
          snippet_types_matching?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
        }
        Update: {
          id?: never
          method_name?: string
          snippet_types_matching?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
        }
        Relationships: []
      }
      differentiation_strategies: {
        Row: {
          id: number
          method_name: string
          snippet_types_matching:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          strategy_name: string
        }
        Insert: {
          id?: never
          method_name: string
          snippet_types_matching?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          strategy_name: string
        }
        Update: {
          id?: never
          method_name?: string
          snippet_types_matching?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          strategy_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "differentiation_strategies_method_name_fkey"
            columns: ["method_name"]
            isOneToOne: false
            referencedRelation: "differentiation_methods"
            referencedColumns: ["method_name"]
          },
        ]
      }
      emojis: {
        Row: {
          category: string | null
          emoji: string | null
          id: number
          tags: string[] | null
        }
        Insert: {
          category?: string | null
          emoji?: string | null
          id?: never
          tags?: string[] | null
        }
        Update: {
          category?: string | null
          emoji?: string | null
          id?: never
          tags?: string[] | null
        }
        Relationships: []
      }
      emotion_logging_prompts: {
        Row: {
          category: string
          created_at: string | null
          id: number
          prompt: string
        }
        Insert: {
          category: string
          created_at?: string | null
          id?: number
          prompt: string
        }
        Update: {
          category?: string
          created_at?: string | null
          id?: number
          prompt?: string
        }
        Relationships: []
      }
      emotion_types: {
        Row: {
          emoji: string
          id: number
          name: string | null
          positivity_scale: number | null
        }
        Insert: {
          emoji: string
          id?: number
          name?: string | null
          positivity_scale?: number | null
        }
        Update: {
          emoji?: string
          id?: number
          name?: string | null
          positivity_scale?: number | null
        }
        Relationships: []
      }
      emotions: {
        Row: {
          created_at: string
          emoji: string | null
          emotion_id: number | null
          emotion_level: number | null
          emotion_name: string | null
          id: number
          logged_by: string | null
          notes: string | null
          triggered_by: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          emoji?: string | null
          emotion_id?: number | null
          emotion_level?: number | null
          emotion_name?: string | null
          id?: number
          logged_by?: string | null
          notes?: string | null
          triggered_by?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          emoji?: string | null
          emotion_id?: number | null
          emotion_level?: number | null
          emotion_name?: string | null
          id?: number
          logged_by?: string | null
          notes?: string | null
          triggered_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emotions_emotionid_fkey"
            columns: ["emotion_id"]
            isOneToOne: false
            referencedRelation: "emotion_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emotions_logged_by_fkey"
            columns: ["logged_by"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "emotions_logged_by_fkey"
            columns: ["logged_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emotions_user_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "emotions_user_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          attendee_limit: number | null
          author: string | null
          created_at: string
          description: string | null
          emoji: string | null
          end_date_time: string | null
          event_name: string | null
          event_type: Database["public"]["Enums"]["event_types"] | null
          id: number
          location: string | null
          public: boolean | null
          rsvp_no: string[] | null
          rsvp_uuids: string[] | null
          start_date_time: string | null
          user_ids_invitees: string[] | null
        }
        Insert: {
          attendee_limit?: number | null
          author?: string | null
          created_at?: string
          description?: string | null
          emoji?: string | null
          end_date_time?: string | null
          event_name?: string | null
          event_type?: Database["public"]["Enums"]["event_types"] | null
          id?: number
          location?: string | null
          public?: boolean | null
          rsvp_no?: string[] | null
          rsvp_uuids?: string[] | null
          start_date_time?: string | null
          user_ids_invitees?: string[] | null
        }
        Update: {
          attendee_limit?: number | null
          author?: string | null
          created_at?: string
          description?: string | null
          emoji?: string | null
          end_date_time?: string | null
          event_name?: string | null
          event_type?: Database["public"]["Enums"]["event_types"] | null
          id?: number
          location?: string | null
          public?: boolean | null
          rsvp_no?: string[] | null
          rsvp_uuids?: string[] | null
          start_date_time?: string | null
          user_ids_invitees?: string[] | null
        }
        Relationships: []
      }
      file_urls: {
        Row: {
          created_at: string
          id: number
          name: string | null
          type: Database["public"]["Enums"]["file_type"] | null
          url: string | null
          video_duration: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          type?: Database["public"]["Enums"]["file_type"] | null
          url?: string | null
          video_duration?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          type?: Database["public"]["Enums"]["file_type"] | null
          url?: string | null
          video_duration?: number | null
        }
        Relationships: []
      }
      fill_in_the_blanks_snippets: {
        Row: {
          assigned_to: string | null
          attempted_times: number | null
          case_sensitive: boolean | null
          created_at: string
          guessed_words: string[] | null
          hint: string | null
          id: number
          public: boolean | null
          sentence_part_one: string | null
          sentence_part_two: string | null
          subject: string | null
          succeed: boolean | null
          user_created_by: string | null
          word_to_guess: string | null
        }
        Insert: {
          assigned_to?: string | null
          attempted_times?: number | null
          case_sensitive?: boolean | null
          created_at?: string
          guessed_words?: string[] | null
          hint?: string | null
          id?: number
          public?: boolean | null
          sentence_part_one?: string | null
          sentence_part_two?: string | null
          subject?: string | null
          succeed?: boolean | null
          user_created_by?: string | null
          word_to_guess?: string | null
        }
        Update: {
          assigned_to?: string | null
          attempted_times?: number | null
          case_sensitive?: boolean | null
          created_at?: string
          guessed_words?: string[] | null
          hint?: string | null
          id?: number
          public?: boolean | null
          sentence_part_one?: string | null
          sentence_part_two?: string | null
          subject?: string | null
          succeed?: boolean | null
          user_created_by?: string | null
          word_to_guess?: string | null
        }
        Relationships: []
      }
      fill_in_the_blanks_templates: {
        Row: {
          case_sensitive: boolean | null
          created_at: string
          hint: string | null
          id: number
          public: boolean | null
          sentence_part_one: string | null
          sentence_part_two: string | null
          subject: string | null
          user_created_by: string | null
          word_to_guess: string | null
        }
        Insert: {
          case_sensitive?: boolean | null
          created_at?: string
          hint?: string | null
          id?: number
          public?: boolean | null
          sentence_part_one?: string | null
          sentence_part_two?: string | null
          subject?: string | null
          user_created_by?: string | null
          word_to_guess?: string | null
        }
        Update: {
          case_sensitive?: boolean | null
          created_at?: string
          hint?: string | null
          id?: number
          public?: boolean | null
          sentence_part_one?: string | null
          sentence_part_two?: string | null
          subject?: string | null
          user_created_by?: string | null
          word_to_guess?: string | null
        }
        Relationships: []
      }
      flashcard_games: {
        Row: {
          created_at: string | null
          game_id: string
          lesson_snippet_id: number
          score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          game_id?: string
          lesson_snippet_id: number
          score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          game_id?: string
          lesson_snippet_id?: number
          score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcard_games_lesson_snippet_id_fkey"
            columns: ["lesson_snippet_id"]
            isOneToOne: true
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcard_guesses: {
        Row: {
          created_at: string
          flashcard_id: number | null
          game_id: string | null
          guess: string | null
          id: number
          is_correct: boolean | null
          user: string | null
        }
        Insert: {
          created_at?: string
          flashcard_id?: number | null
          game_id?: string | null
          guess?: string | null
          id?: number
          is_correct?: boolean | null
          user?: string | null
        }
        Update: {
          created_at?: string
          flashcard_id?: number | null
          game_id?: string | null
          guess?: string | null
          id?: number
          is_correct?: boolean | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcard_guesses_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "flashcard_guesses_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      flashcards: {
        Row: {
          answer: string | null
          author: string | null
          card_img: string | null
          created_at: string
          id: number
          public: boolean | null
        }
        Insert: {
          answer?: string | null
          author?: string | null
          card_img?: string | null
          created_at?: string
          id?: number
          public?: boolean | null
        }
        Update: {
          answer?: string | null
          author?: string | null
          card_img?: string | null
          created_at?: string
          id?: number
          public?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "flashcards_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      forms_requested_for_signing: {
        Row: {
          child_user: string | null
          created_at: string
          deadline: string | null
          form_id: number | null
          id: number
          signature_url: string | null
          user_signing: string | null
        }
        Insert: {
          child_user?: string | null
          created_at?: string
          deadline?: string | null
          form_id?: number | null
          id?: number
          signature_url?: string | null
          user_signing?: string | null
        }
        Update: {
          child_user?: string | null
          created_at?: string
          deadline?: string | null
          form_id?: number | null
          id?: number
          signature_url?: string | null
          user_signing?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forms_requested_for_signing_form_id_fkey"
            columns: ["form_id"]
            isOneToOne: false
            referencedRelation: "school_permission_forms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forms_requested_for_signing_user_signing_fkey"
            columns: ["user_signing"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "forms_requested_for_signing_user_signing_fkey"
            columns: ["user_signing"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "forms_requested_for_signing_user_signing_fkey"
            columns: ["user_signing"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "forms_requested_for_signing_user_signing_fkey"
            columns: ["user_signing"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "forms_requested_for_signing_user_signing_fkey"
            columns: ["user_signing"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      grade_averages: {
        Row: {
          created_at: string
          grade_average: string | null
          grade_scaled_average: number | null
          id: number
          learning_level: string | null
          subject: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          grade_average?: string | null
          grade_scaled_average?: number | null
          id?: number
          learning_level?: string | null
          subject?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          grade_average?: string | null
          grade_scaled_average?: number | null
          id?: number
          learning_level?: string | null
          subject?: string | null
          user?: string | null
        }
        Relationships: []
      }
      grade_conversions: {
        Row: {
          conversion_rules: Json
          created_at: string
          from_system_id: number
          id: number
          to_system_id: number
        }
        Insert: {
          conversion_rules: Json
          created_at?: string
          from_system_id: number
          id?: number
          to_system_id: number
        }
        Update: {
          conversion_rules?: Json
          created_at?: string
          from_system_id?: number
          id?: number
          to_system_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "grade_conversions_from_fkey"
            columns: ["from_system_id"]
            isOneToOne: false
            referencedRelation: "grading_systems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "grade_conversions_to_fkey"
            columns: ["to_system_id"]
            isOneToOne: false
            referencedRelation: "grading_systems"
            referencedColumns: ["id"]
          },
        ]
      }
      grade_levels: {
        Row: {
          age_range: string | null
          education_stage: string
          id: number
          level_name: string
        }
        Insert: {
          age_range?: string | null
          education_stage: string
          id?: number
          level_name: string
        }
        Update: {
          age_range?: string | null
          education_stage?: string
          id?: number
          level_name?: string
        }
        Relationships: []
      }
      grading_garage: {
        Row: {
          class_id: number | null
          created_at: string
          evidence_urls: string[] | null
          grade: string | null
          grade_details: Json | null
          grade_score_to_thousand: number | null
          grading_system: number | null
          id: number
          lesson: number | null
          notes: string | null
          school: number | null
          student: string | null
          subject: string | null
          subject_id: number | null
          teacher: string | null
        }
        Insert: {
          class_id?: number | null
          created_at?: string
          evidence_urls?: string[] | null
          grade?: string | null
          grade_details?: Json | null
          grade_score_to_thousand?: number | null
          grading_system?: number | null
          id?: number
          lesson?: number | null
          notes?: string | null
          school?: number | null
          student?: string | null
          subject?: string | null
          subject_id?: number | null
          teacher?: string | null
        }
        Update: {
          class_id?: number | null
          created_at?: string
          evidence_urls?: string[] | null
          grade?: string | null
          grade_details?: Json | null
          grade_score_to_thousand?: number | null
          grading_system?: number | null
          id?: number
          lesson?: number | null
          notes?: string | null
          school?: number | null
          student?: string | null
          subject?: string | null
          subject_id?: number | null
          teacher?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gradinggarage_lesson_fkey"
            columns: ["lesson"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gradinggarage_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "gradinggarage_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      grading_streaks: {
        Row: {
          end_date: string
          id: number
          start_date: string
          streak_length: number
          teacher_id: string
        }
        Insert: {
          end_date: string
          id?: number
          start_date: string
          streak_length: number
          teacher_id: string
        }
        Update: {
          end_date?: string
          id?: number
          start_date?: string
          streak_length?: number
          teacher_id?: string
        }
        Relationships: []
      }
      grading_systems: {
        Row: {
          combine_with: Json | null
          created_at: string
          description: string | null
          id: number
          name: string
          options: Json | null
          type: string
          updated_at: string
        }
        Insert: {
          combine_with?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          name: string
          options?: Json | null
          type?: string
          updated_at?: string
        }
        Update: {
          combine_with?: Json | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          options?: Json | null
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      gratitude_bursts: {
        Row: {
          created_at: string | null
          gratitude_1: string
          gratitude_2: string
          gratitude_3: string
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          gratitude_1: string
          gratitude_2: string
          gratitude_3: string
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          gratitude_1?: string
          gratitude_2?: string
          gratitude_3?: string
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      gratitude_prompts: {
        Row: {
          id: number
          prompt: string
        }
        Insert: {
          id?: never
          prompt: string
        }
        Update: {
          id?: never
          prompt?: string
        }
        Relationships: []
      }
      grocery_item_templates: {
        Row: {
          emoji: string
          id: number
          item_name: string
        }
        Insert: {
          emoji: string
          id?: number
          item_name: string
        }
        Update: {
          emoji?: string
          id?: number
          item_name?: string
        }
        Relationships: []
      }
      grocery_list_items: {
        Row: {
          bought: boolean | null
          created_at: string
          emoji: string | null
          id: number
          item_name: string | null
        }
        Insert: {
          bought?: boolean | null
          created_at?: string
          emoji?: string | null
          id?: number
          item_name?: string | null
        }
        Update: {
          bought?: boolean | null
          created_at?: string
          emoji?: string | null
          id?: number
          item_name?: string | null
        }
        Relationships: []
      }
      grocery_lists: {
        Row: {
          created_at: string
          id: number
          items: number[] | null
          shared_with: string[] | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          items?: number[] | null
          shared_with?: string[] | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          items?: number[] | null
          shared_with?: string[] | null
          user?: string | null
        }
        Relationships: []
      }
      group_lesson_users: {
        Row: {
          created_at: string
          id: number
          lesson_id: number | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          lesson_id?: number | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          lesson_id?: number | null
          user?: string | null
        }
        Relationships: []
      }
      group_reward_donations: {
        Row: {
          created_at: string
          group_reward_id: number
          id: number
          treasure_name: Database["public"]["Enums"]["treasure_types"]
          treasure_value: number
          user_id: string
        }
        Insert: {
          created_at?: string
          group_reward_id: number
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"]
          treasure_value: number
          user_id: string
        }
        Update: {
          created_at?: string
          group_reward_id?: number
          id?: number
          treasure_name?: Database["public"]["Enums"]["treasure_types"]
          treasure_value?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "group_reward_donations_group_reward_fkey"
            columns: ["group_reward_id"]
            isOneToOne: false
            referencedRelation: "group_rewards"
            referencedColumns: ["id"]
          },
        ]
      }
      group_rewards: {
        Row: {
          assigned_by: string | null
          assigned_to: string[] | null
          created_at: string
          current_treasure_value: number | null
          expiry: string | null
          fully_funded: boolean | null
          id: number
          next_fully_funded: boolean | null
          quanity_paid_for: number | null
          quantity: number | null
          quantity_used: number | null
          reward_description: string | null
          reward_emoji: string | null
          reward_name: string | null
          total_till_next_redeem: number | null
          total_treasure_paid: number | null
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value: number | null
        }
        Insert: {
          assigned_by?: string | null
          assigned_to?: string[] | null
          created_at?: string
          current_treasure_value?: number | null
          expiry?: string | null
          fully_funded?: boolean | null
          id?: number
          next_fully_funded?: boolean | null
          quanity_paid_for?: number | null
          quantity?: number | null
          quantity_used?: number | null
          reward_description?: string | null
          reward_emoji?: string | null
          reward_name?: string | null
          total_till_next_redeem?: number | null
          total_treasure_paid?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value?: number | null
        }
        Update: {
          assigned_by?: string | null
          assigned_to?: string[] | null
          created_at?: string
          current_treasure_value?: number | null
          expiry?: string | null
          fully_funded?: boolean | null
          id?: number
          next_fully_funded?: boolean | null
          quanity_paid_for?: number | null
          quantity?: number | null
          quantity_used?: number | null
          reward_description?: string | null
          reward_emoji?: string | null
          reward_name?: string | null
          total_till_next_redeem?: number | null
          total_treasure_paid?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value?: number | null
        }
        Relationships: []
      }
      journalling: {
        Row: {
          content: string | null
          created_at: string
          emotion_logged: number | null
          file_urls: number[] | null
          id: number
          journal_type: string | null
          tags: string[] | null
          user: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          emotion_logged?: number | null
          file_urls?: number[] | null
          id?: number
          journal_type?: string | null
          tags?: string[] | null
          user?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          emotion_logged?: number | null
          file_urls?: number[] | null
          id?: number
          journal_type?: string | null
          tags?: string[] | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journalling_emotion_logged_fkey"
            columns: ["emotion_logged"]
            isOneToOne: false
            referencedRelation: "emotions"
            referencedColumns: ["id"]
          },
        ]
      }
      leaderboard_scope_types: {
        Row: {
          description: string | null
          scope: Database["public"]["Enums"]["scopes"]
        }
        Insert: {
          description?: string | null
          scope: Database["public"]["Enums"]["scopes"]
        }
        Update: {
          description?: string | null
          scope?: Database["public"]["Enums"]["scopes"]
        }
        Relationships: []
      }
      leaderboards: {
        Row: {
          artistic_amethyst: number | null
          artistic_amethyst_earned_ever: number | null
          artistic_amethyst_weekly: number | null
          artistic_amethyst_weekly_percentage: number | null
          badges_earned: string[] | null
          class_id: number | null
          communicoin: number | null
          communicoin_earned_ever: number | null
          communicoin_weekly: number | null
          communicoin_weekly_percentage: number | null
          compliments_received: number | null
          determined_diamond: number | null
          determined_diamond_earned_ever: number | null
          determined_diamond_weekly: number | null
          determined_diamond_weekly_percentage: number | null
          emotion_emerald: number | null
          emotion_emerald_earned_ever: number | null
          emotion_emerald_weekly: number | null
          emotion_emerald_weekly_percentage: number | null
          emotional_growth_score: number | null
          friend_id: string | null
          generosity_gem: number | null
          generosity_gem_earned_ever: number | null
          generosity_gem_weekly: number | null
          generosity_gem_weekly_percentage: number | null
          health_heart: number | null
          health_heart_earned_ever: number | null
          health_heart_weekly: number | null
          health_heart_weekly_percentage: number | null
          justice_jewel: number | null
          justice_jewel_earned_ever: number | null
          justice_jewel_weekly: number | null
          justice_jewel_weekly_percentage: number | null
          learning_loot: number | null
          learning_loot_earned_ever: number | null
          learning_loot_weekly: number | null
          learning_loot_weekly_percentage: number | null
          most_improved_this_week: boolean | null
          peace_pearl: number | null
          peace_pearl_earned_ever: number | null
          peace_pearl_weekly: number | null
          peace_pearl_weekly_percentage: number | null
          rank: number | null
          responsibility_ruby: number | null
          responsibility_ruby_earned_ever: number | null
          responsibility_ruby_weekly: number | null
          responsibility_ruby_weekly_percentage: number | null
          safety_sapphire: number | null
          safety_sapphire_earned_ever: number | null
          safety_sapphire_weekly: number | null
          safety_sapphire_weekly_percentage: number | null
          school_id: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status: string | null
          tidy_topaz: number | null
          tidy_topaz_earned_ever: number | null
          tidy_topaz_weekly: number | null
          tidy_topaz_weekly_percentage: number | null
          total_messages_sent: number | null
          total_treasure: number | null
          total_treasures_earned_ever: number | null
          total_treasures_earned_this_week: number | null
          updated_at: string | null
          user_id: string
          weekly_improvement_percentage: number | null
          weekly_improvement_score: number | null
        }
        Insert: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Update: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope?: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id?: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "leaderboards_scope_fkey"
            columns: ["scope"]
            isOneToOne: false
            referencedRelation: "leaderboard_scope_types"
            referencedColumns: ["scope"]
          },
        ]
      }
      leaderboards_class: {
        Row: {
          artistic_amethyst: number | null
          artistic_amethyst_earned_ever: number | null
          artistic_amethyst_weekly: number | null
          artistic_amethyst_weekly_percentage: number | null
          badges_earned: string[] | null
          class_id: number | null
          communicoin: number | null
          communicoin_earned_ever: number | null
          communicoin_weekly: number | null
          communicoin_weekly_percentage: number | null
          compliments_received: number | null
          determined_diamond: number | null
          determined_diamond_earned_ever: number | null
          determined_diamond_weekly: number | null
          determined_diamond_weekly_percentage: number | null
          emotion_emerald: number | null
          emotion_emerald_earned_ever: number | null
          emotion_emerald_weekly: number | null
          emotion_emerald_weekly_percentage: number | null
          emotional_growth_score: number | null
          friend_id: string | null
          generosity_gem: number | null
          generosity_gem_earned_ever: number | null
          generosity_gem_weekly: number | null
          generosity_gem_weekly_percentage: number | null
          health_heart: number | null
          health_heart_earned_ever: number | null
          health_heart_weekly: number | null
          health_heart_weekly_percentage: number | null
          justice_jewel: number | null
          justice_jewel_earned_ever: number | null
          justice_jewel_weekly: number | null
          justice_jewel_weekly_percentage: number | null
          learning_loot: number | null
          learning_loot_earned_ever: number | null
          learning_loot_weekly: number | null
          learning_loot_weekly_percentage: number | null
          most_improved_this_week: boolean | null
          peace_pearl: number | null
          peace_pearl_earned_ever: number | null
          peace_pearl_weekly: number | null
          peace_pearl_weekly_percentage: number | null
          rank: number | null
          responsibility_ruby: number | null
          responsibility_ruby_earned_ever: number | null
          responsibility_ruby_weekly: number | null
          responsibility_ruby_weekly_percentage: number | null
          safety_sapphire: number | null
          safety_sapphire_earned_ever: number | null
          safety_sapphire_weekly: number | null
          safety_sapphire_weekly_percentage: number | null
          school_id: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status: string | null
          tidy_topaz: number | null
          tidy_topaz_earned_ever: number | null
          tidy_topaz_weekly: number | null
          tidy_topaz_weekly_percentage: number | null
          total_messages_sent: number | null
          total_treasure: number | null
          total_treasures_earned_ever: number | null
          total_treasures_earned_this_week: number | null
          updated_at: string | null
          user_id: string
          weekly_improvement_percentage: number | null
          weekly_improvement_score: number | null
        }
        Insert: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Update: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope?: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id?: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Relationships: []
      }
      leaderboards_friend: {
        Row: {
          artistic_amethyst: number | null
          artistic_amethyst_earned_ever: number | null
          artistic_amethyst_weekly: number | null
          artistic_amethyst_weekly_percentage: number | null
          badges_earned: string[] | null
          class_id: number | null
          communicoin: number | null
          communicoin_earned_ever: number | null
          communicoin_weekly: number | null
          communicoin_weekly_percentage: number | null
          compliments_received: number | null
          determined_diamond: number | null
          determined_diamond_earned_ever: number | null
          determined_diamond_weekly: number | null
          determined_diamond_weekly_percentage: number | null
          emotion_emerald: number | null
          emotion_emerald_earned_ever: number | null
          emotion_emerald_weekly: number | null
          emotion_emerald_weekly_percentage: number | null
          emotional_growth_score: number | null
          friend_id: string | null
          generosity_gem: number | null
          generosity_gem_earned_ever: number | null
          generosity_gem_weekly: number | null
          generosity_gem_weekly_percentage: number | null
          health_heart: number | null
          health_heart_earned_ever: number | null
          health_heart_weekly: number | null
          health_heart_weekly_percentage: number | null
          justice_jewel: number | null
          justice_jewel_earned_ever: number | null
          justice_jewel_weekly: number | null
          justice_jewel_weekly_percentage: number | null
          learning_loot: number | null
          learning_loot_earned_ever: number | null
          learning_loot_weekly: number | null
          learning_loot_weekly_percentage: number | null
          most_improved_this_week: boolean | null
          peace_pearl: number | null
          peace_pearl_earned_ever: number | null
          peace_pearl_weekly: number | null
          peace_pearl_weekly_percentage: number | null
          rank: number | null
          responsibility_ruby: number | null
          responsibility_ruby_earned_ever: number | null
          responsibility_ruby_weekly: number | null
          responsibility_ruby_weekly_percentage: number | null
          safety_sapphire: number | null
          safety_sapphire_earned_ever: number | null
          safety_sapphire_weekly: number | null
          safety_sapphire_weekly_percentage: number | null
          school_id: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status: string | null
          tidy_topaz: number | null
          tidy_topaz_earned_ever: number | null
          tidy_topaz_weekly: number | null
          tidy_topaz_weekly_percentage: number | null
          total_messages_sent: number | null
          total_treasure: number | null
          total_treasures_earned_ever: number | null
          total_treasures_earned_this_week: number | null
          updated_at: string | null
          user_id: string
          weekly_improvement_percentage: number | null
          weekly_improvement_score: number | null
        }
        Insert: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Update: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope?: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id?: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Relationships: []
      }
      leaderboards_school: {
        Row: {
          artistic_amethyst: number | null
          artistic_amethyst_earned_ever: number | null
          artistic_amethyst_weekly: number | null
          artistic_amethyst_weekly_percentage: number | null
          badges_earned: string[] | null
          class_id: number | null
          communicoin: number | null
          communicoin_earned_ever: number | null
          communicoin_weekly: number | null
          communicoin_weekly_percentage: number | null
          compliments_received: number | null
          determined_diamond: number | null
          determined_diamond_earned_ever: number | null
          determined_diamond_weekly: number | null
          determined_diamond_weekly_percentage: number | null
          emotion_emerald: number | null
          emotion_emerald_earned_ever: number | null
          emotion_emerald_weekly: number | null
          emotion_emerald_weekly_percentage: number | null
          emotional_growth_score: number | null
          friend_id: string | null
          generosity_gem: number | null
          generosity_gem_earned_ever: number | null
          generosity_gem_weekly: number | null
          generosity_gem_weekly_percentage: number | null
          health_heart: number | null
          health_heart_earned_ever: number | null
          health_heart_weekly: number | null
          health_heart_weekly_percentage: number | null
          justice_jewel: number | null
          justice_jewel_earned_ever: number | null
          justice_jewel_weekly: number | null
          justice_jewel_weekly_percentage: number | null
          learning_loot: number | null
          learning_loot_earned_ever: number | null
          learning_loot_weekly: number | null
          learning_loot_weekly_percentage: number | null
          most_improved_this_week: boolean | null
          peace_pearl: number | null
          peace_pearl_earned_ever: number | null
          peace_pearl_weekly: number | null
          peace_pearl_weekly_percentage: number | null
          rank: number | null
          responsibility_ruby: number | null
          responsibility_ruby_earned_ever: number | null
          responsibility_ruby_weekly: number | null
          responsibility_ruby_weekly_percentage: number | null
          safety_sapphire: number | null
          safety_sapphire_earned_ever: number | null
          safety_sapphire_weekly: number | null
          safety_sapphire_weekly_percentage: number | null
          school_id: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status: string | null
          tidy_topaz: number | null
          tidy_topaz_earned_ever: number | null
          tidy_topaz_weekly: number | null
          tidy_topaz_weekly_percentage: number | null
          total_messages_sent: number | null
          total_treasure: number | null
          total_treasures_earned_ever: number | null
          total_treasures_earned_this_week: number | null
          updated_at: string | null
          user_id: string
          weekly_improvement_percentage: number | null
          weekly_improvement_score: number | null
        }
        Insert: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Update: {
          artistic_amethyst?: number | null
          artistic_amethyst_earned_ever?: number | null
          artistic_amethyst_weekly?: number | null
          artistic_amethyst_weekly_percentage?: number | null
          badges_earned?: string[] | null
          class_id?: number | null
          communicoin?: number | null
          communicoin_earned_ever?: number | null
          communicoin_weekly?: number | null
          communicoin_weekly_percentage?: number | null
          compliments_received?: number | null
          determined_diamond?: number | null
          determined_diamond_earned_ever?: number | null
          determined_diamond_weekly?: number | null
          determined_diamond_weekly_percentage?: number | null
          emotion_emerald?: number | null
          emotion_emerald_earned_ever?: number | null
          emotion_emerald_weekly?: number | null
          emotion_emerald_weekly_percentage?: number | null
          emotional_growth_score?: number | null
          friend_id?: string | null
          generosity_gem?: number | null
          generosity_gem_earned_ever?: number | null
          generosity_gem_weekly?: number | null
          generosity_gem_weekly_percentage?: number | null
          health_heart?: number | null
          health_heart_earned_ever?: number | null
          health_heart_weekly?: number | null
          health_heart_weekly_percentage?: number | null
          justice_jewel?: number | null
          justice_jewel_earned_ever?: number | null
          justice_jewel_weekly?: number | null
          justice_jewel_weekly_percentage?: number | null
          learning_loot?: number | null
          learning_loot_earned_ever?: number | null
          learning_loot_weekly?: number | null
          learning_loot_weekly_percentage?: number | null
          most_improved_this_week?: boolean | null
          peace_pearl?: number | null
          peace_pearl_earned_ever?: number | null
          peace_pearl_weekly?: number | null
          peace_pearl_weekly_percentage?: number | null
          rank?: number | null
          responsibility_ruby?: number | null
          responsibility_ruby_earned_ever?: number | null
          responsibility_ruby_weekly?: number | null
          responsibility_ruby_weekly_percentage?: number | null
          safety_sapphire?: number | null
          safety_sapphire_earned_ever?: number | null
          safety_sapphire_weekly?: number | null
          safety_sapphire_weekly_percentage?: number | null
          school_id?: number | null
          scope?: Database["public"]["Enums"]["scopes"]
          streak_status?: string | null
          tidy_topaz?: number | null
          tidy_topaz_earned_ever?: number | null
          tidy_topaz_weekly?: number | null
          tidy_topaz_weekly_percentage?: number | null
          total_messages_sent?: number | null
          total_treasure?: number | null
          total_treasures_earned_ever?: number | null
          total_treasures_earned_this_week?: number | null
          updated_at?: string | null
          user_id?: string
          weekly_improvement_percentage?: number | null
          weekly_improvement_score?: number | null
        }
        Relationships: []
      }
      leaderboards_two: {
        Row: {
          compliment_streak_current: number | null
          compliment_streak_longest: number | null
          emotional_growth_percentage: string | null
          emotional_streak_current: number | null
          emotional_streak_longest: number | null
          fast_tasks_completed: number | null
          group_rewards_contributed_to: number | null
          id: number
          last_updated: string | null
          most_frequent_emotion_emoji_this_week: string | null
          most_frequent_emotion_this_week: string | null
          recent_group_reward_contribution_percentage: number | null
          scope: Database["public"]["Enums"]["scopes"]
          task_streak_current: number | null
          task_streak_longest: number | null
          total_achievements_completed: number | null
          total_compliments_received: number | null
          total_compliments_sent: number | null
          total_emotions_logged: number | null
          total_milestones_completed: number | null
          total_rewards_redeemed: number | null
          total_tasks_completed: number | null
          user_id: string
          weekly_emotional_summary: string | null
          weekly_points_total: number | null
        }
        Insert: {
          compliment_streak_current?: number | null
          compliment_streak_longest?: number | null
          emotional_growth_percentage?: string | null
          emotional_streak_current?: number | null
          emotional_streak_longest?: number | null
          fast_tasks_completed?: number | null
          group_rewards_contributed_to?: number | null
          id?: number
          last_updated?: string | null
          most_frequent_emotion_emoji_this_week?: string | null
          most_frequent_emotion_this_week?: string | null
          recent_group_reward_contribution_percentage?: number | null
          scope: Database["public"]["Enums"]["scopes"]
          task_streak_current?: number | null
          task_streak_longest?: number | null
          total_achievements_completed?: number | null
          total_compliments_received?: number | null
          total_compliments_sent?: number | null
          total_emotions_logged?: number | null
          total_milestones_completed?: number | null
          total_rewards_redeemed?: number | null
          total_tasks_completed?: number | null
          user_id: string
          weekly_emotional_summary?: string | null
          weekly_points_total?: number | null
        }
        Update: {
          compliment_streak_current?: number | null
          compliment_streak_longest?: number | null
          emotional_growth_percentage?: string | null
          emotional_streak_current?: number | null
          emotional_streak_longest?: number | null
          fast_tasks_completed?: number | null
          group_rewards_contributed_to?: number | null
          id?: number
          last_updated?: string | null
          most_frequent_emotion_emoji_this_week?: string | null
          most_frequent_emotion_this_week?: string | null
          recent_group_reward_contribution_percentage?: number | null
          scope?: Database["public"]["Enums"]["scopes"]
          task_streak_current?: number | null
          task_streak_longest?: number | null
          total_achievements_completed?: number | null
          total_compliments_received?: number | null
          total_compliments_sent?: number | null
          total_emotions_logged?: number | null
          total_milestones_completed?: number | null
          total_rewards_redeemed?: number | null
          total_tasks_completed?: number | null
          user_id?: string
          weekly_emotional_summary?: string | null
          weekly_points_total?: number | null
        }
        Relationships: []
      }
      learning_objectives: {
        Row: {
          id: number
          learning_type: number
          objective_text: string
        }
        Insert: {
          id?: never
          learning_type: number
          objective_text: string
        }
        Update: {
          id?: never
          learning_type?: number
          objective_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "learning_objectives_learning_type_fkey"
            columns: ["learning_type"]
            isOneToOne: false
            referencedRelation: "learning_types"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_types: {
        Row: {
          id: number
          type_name: string
        }
        Insert: {
          id?: number
          type_name: string
        }
        Update: {
          id?: number
          type_name?: string
        }
        Relationships: []
      }
      lesson_grading_methods: {
        Row: {
          created_at: string
          grading_system_id: number
          id: number
          lesson_id: number
          options: Json | null
          weight: number
        }
        Insert: {
          created_at?: string
          grading_system_id: number
          id?: number
          lesson_id: number
          options?: Json | null
          weight?: number
        }
        Update: {
          created_at?: string
          grading_system_id?: number
          id?: number
          lesson_id?: number
          options?: Json | null
          weight?: number
        }
        Relationships: [
          {
            foreignKeyName: "lesson_grading_methods_lesson_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_grading_methods_system_fkey"
            columns: ["grading_system_id"]
            isOneToOne: false
            referencedRelation: "grading_systems"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_journey_template_dependencies: {
        Row: {
          conditional_next_snippet: boolean | null
          correct_snippet_after: number | null
          created_at: string | null
          dependency_type: Database["public"]["Enums"]["snippet_journey_types"]
          id: number
          index_of_snippet: number
          snippet_before: number | null
          snippet_id: number
          template_id: number | null
          wrong_snippet_after: number | null
        }
        Insert: {
          conditional_next_snippet?: boolean | null
          correct_snippet_after?: number | null
          created_at?: string | null
          dependency_type: Database["public"]["Enums"]["snippet_journey_types"]
          id?: never
          index_of_snippet: number
          snippet_before?: number | null
          snippet_id: number
          template_id?: number | null
          wrong_snippet_after?: number | null
        }
        Update: {
          conditional_next_snippet?: boolean | null
          correct_snippet_after?: number | null
          created_at?: string | null
          dependency_type?: Database["public"]["Enums"]["snippet_journey_types"]
          id?: never
          index_of_snippet?: number
          snippet_before?: number | null
          snippet_id?: number
          template_id?: number | null
          wrong_snippet_after?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_correct_snippet_after"
            columns: ["correct_snippet_after"]
            isOneToOne: false
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_snippet"
            columns: ["snippet_id"]
            isOneToOne: false
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_snippet_before"
            columns: ["snippet_before"]
            isOneToOne: false
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_template"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "lesson_journey_template_ideas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_wrong_snippet_after"
            columns: ["wrong_snippet_after"]
            isOneToOne: false
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_journey_template_ideas: {
        Row: {
          age_range: string | null
          created_at: string | null
          description: string
          id: number
          journey_type: Database["public"]["Enums"]["snippet_journey_types"]
          learning_focus: string | null
          suggested_snippets: Database["public"]["Enums"]["lesson_snippet_types"][]
          template_name: string
          updated_at: string | null
        }
        Insert: {
          age_range?: string | null
          created_at?: string | null
          description: string
          id?: never
          journey_type: Database["public"]["Enums"]["snippet_journey_types"]
          learning_focus?: string | null
          suggested_snippets: Database["public"]["Enums"]["lesson_snippet_types"][]
          template_name: string
          updated_at?: string | null
        }
        Update: {
          age_range?: string | null
          created_at?: string | null
          description?: string
          id?: never
          journey_type?: Database["public"]["Enums"]["snippet_journey_types"]
          learning_focus?: string | null
          suggested_snippets?: Database["public"]["Enums"]["lesson_snippet_types"][]
          template_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      lesson_snippets: {
        Row: {
          audio: string | null
          complete: boolean | null
          created_at: string
          description: string | null
          diff_methods_used: number[] | null
          diff_strategies_used: number[] | null
          difficulty_level: number | null
          duration: number | null
          emoji: string | null
          evidence_file_urls: number[] | null
          files: number[] | null
          fill_in_the_blanks_id: number | null
          flashcards_ids: number[] | null
          grade_level: number | null
          graded: boolean | null
          id: number
          learning_objectives: number[] | null
          learning_types: number[] | null
          lesson: number | null
          name: string | null
          poll_id: number | null
          quiz_id: number | null
          snippet_type: string | null
          student: string | null
          subject: string | null
          teacher: string | null
          text_answer: string | null
          time_spent: unknown | null
          time_spent_on_lesson_snippet: number | null
        }
        Insert: {
          audio?: string | null
          complete?: boolean | null
          created_at?: string
          description?: string | null
          diff_methods_used?: number[] | null
          diff_strategies_used?: number[] | null
          difficulty_level?: number | null
          duration?: number | null
          emoji?: string | null
          evidence_file_urls?: number[] | null
          files?: number[] | null
          fill_in_the_blanks_id?: number | null
          flashcards_ids?: number[] | null
          grade_level?: number | null
          graded?: boolean | null
          id?: number
          learning_objectives?: number[] | null
          learning_types?: number[] | null
          lesson?: number | null
          name?: string | null
          poll_id?: number | null
          quiz_id?: number | null
          snippet_type?: string | null
          student?: string | null
          subject?: string | null
          teacher?: string | null
          text_answer?: string | null
          time_spent?: unknown | null
          time_spent_on_lesson_snippet?: number | null
        }
        Update: {
          audio?: string | null
          complete?: boolean | null
          created_at?: string
          description?: string | null
          diff_methods_used?: number[] | null
          diff_strategies_used?: number[] | null
          difficulty_level?: number | null
          duration?: number | null
          emoji?: string | null
          evidence_file_urls?: number[] | null
          files?: number[] | null
          fill_in_the_blanks_id?: number | null
          flashcards_ids?: number[] | null
          grade_level?: number | null
          graded?: boolean | null
          id?: number
          learning_objectives?: number[] | null
          learning_types?: number[] | null
          lesson?: number | null
          name?: string | null
          poll_id?: number | null
          quiz_id?: number | null
          snippet_type?: string | null
          student?: string | null
          subject?: string | null
          teacher?: string | null
          text_answer?: string | null
          time_spent?: unknown | null
          time_spent_on_lesson_snippet?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lessonsnippets_lesson_fkey"
            columns: ["lesson"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_snippets_templates: {
        Row: {
          author: string | null
          created_at: string
          description: string | null
          diff_methods_used: number[] | null
          diff_strategies_used: number[] | null
          difficulty_level: number | null
          duration: number | null
          emoji: string | null
          files: number[] | null
          fill_in_the_blanks_id: number | null
          flashcards_ids: number[] | null
          grade_level: number | null
          id: number
          learning_objectives: number[] | null
          learning_types: number[] | null
          name: string | null
          poll_id: number | null
          public: boolean | null
          quiz_id: number | null
          snippet_audio: string | null
          snippet_type: string | null
          subject: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          description?: string | null
          diff_methods_used?: number[] | null
          diff_strategies_used?: number[] | null
          difficulty_level?: number | null
          duration?: number | null
          emoji?: string | null
          files?: number[] | null
          fill_in_the_blanks_id?: number | null
          flashcards_ids?: number[] | null
          grade_level?: number | null
          id?: number
          learning_objectives?: number[] | null
          learning_types?: number[] | null
          name?: string | null
          poll_id?: number | null
          public?: boolean | null
          quiz_id?: number | null
          snippet_audio?: string | null
          snippet_type?: string | null
          subject?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string
          description?: string | null
          diff_methods_used?: number[] | null
          diff_strategies_used?: number[] | null
          difficulty_level?: number | null
          duration?: number | null
          emoji?: string | null
          files?: number[] | null
          fill_in_the_blanks_id?: number | null
          flashcards_ids?: number[] | null
          grade_level?: number | null
          id?: number
          learning_objectives?: number[] | null
          learning_types?: number[] | null
          name?: string | null
          poll_id?: number | null
          public?: boolean | null
          quiz_id?: number | null
          snippet_audio?: string | null
          snippet_type?: string | null
          subject?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_snippets_templates_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "lesson_snippets_templates_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_snippets_templates_grade_level_fkey"
            columns: ["grade_level"]
            isOneToOne: false
            referencedRelation: "grade_levels"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          class_for: number | null
          class_lesson_plan: number | null
          complete: boolean | null
          created_at: string
          date_due: string | null
          date_to_commence: string | null
          description: string | null
          difficulty_level: number | null
          emoji: string | null
          graded: boolean | null
          grading_status: string
          grading_system_id: number | null
          group_project: boolean | null
          guided_lesson: boolean | null
          homework: boolean | null
          id: number
          independent_lesson: boolean | null
          last_graded_at: string | null
          lesson_status: string | null
          name: string | null
          student: string | null
          subject_id: number | null
          submitted: boolean | null
          teacher: string | null
          title: string | null
        }
        Insert: {
          class_for?: number | null
          class_lesson_plan?: number | null
          complete?: boolean | null
          created_at?: string
          date_due?: string | null
          date_to_commence?: string | null
          description?: string | null
          difficulty_level?: number | null
          emoji?: string | null
          graded?: boolean | null
          grading_status?: string
          grading_system_id?: number | null
          group_project?: boolean | null
          guided_lesson?: boolean | null
          homework?: boolean | null
          id?: number
          independent_lesson?: boolean | null
          last_graded_at?: string | null
          lesson_status?: string | null
          name?: string | null
          student?: string | null
          subject_id?: number | null
          submitted?: boolean | null
          teacher?: string | null
          title?: string | null
        }
        Update: {
          class_for?: number | null
          class_lesson_plan?: number | null
          complete?: boolean | null
          created_at?: string
          date_due?: string | null
          date_to_commence?: string | null
          description?: string | null
          difficulty_level?: number | null
          emoji?: string | null
          graded?: boolean | null
          grading_status?: string
          grading_system_id?: number | null
          group_project?: boolean | null
          guided_lesson?: boolean | null
          homework?: boolean | null
          id?: number
          independent_lesson?: boolean | null
          last_graded_at?: string | null
          lesson_status?: string | null
          name?: string | null
          student?: string | null
          subject_id?: number | null
          submitted?: boolean | null
          teacher?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_class_lesson_plan_fkey"
            columns: ["class_lesson_plan"]
            isOneToOne: false
            referencedRelation: "class_lesson_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lessons_classfor_fkey"
            columns: ["class_for"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lessons_classfor_fkey"
            columns: ["class_for"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "lessons_grading_system_id_fkey"
            columns: ["grading_system_id"]
            isOneToOne: false
            referencedRelation: "grading_systems"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons_templates: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: number | null
          emoji: string | null
          grade_level: number | null
          group_project: boolean | null
          guided_lesson: boolean | null
          homework: boolean | null
          id: number
          independent_lesson: boolean | null
          lesson_status: string | null
          name: string | null
          public: boolean | null
          subject_id: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: number | null
          emoji?: string | null
          grade_level?: number | null
          group_project?: boolean | null
          guided_lesson?: boolean | null
          homework?: boolean | null
          id?: number
          independent_lesson?: boolean | null
          lesson_status?: string | null
          name?: string | null
          public?: boolean | null
          subject_id?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: number | null
          emoji?: string | null
          grade_level?: number | null
          group_project?: boolean | null
          guided_lesson?: boolean | null
          homework?: boolean | null
          id?: number
          independent_lesson?: boolean | null
          lesson_status?: string | null
          name?: string | null
          public?: boolean | null
          subject_id?: number | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_templates_grade_level_fkey"
            columns: ["grade_level"]
            isOneToOne: false
            referencedRelation: "grade_levels"
            referencedColumns: ["id"]
          },
        ]
      }
      letter_launch_games: {
        Row: {
          all_words_this_game: string[]
          category_selected: string
          created_at: string
          difficulty_level: string
          id: number
          num_out_num_score: string | null
          number_of_words_to_play: number
          percentage_score: number | null
          user_id: string
          words_guessed_correctly: number | null
          xp_earned: number | null
        }
        Insert: {
          all_words_this_game: string[]
          category_selected: string
          created_at?: string
          difficulty_level: string
          id?: number
          num_out_num_score?: string | null
          number_of_words_to_play: number
          percentage_score?: number | null
          user_id: string
          words_guessed_correctly?: number | null
          xp_earned?: number | null
        }
        Update: {
          all_words_this_game?: string[]
          category_selected?: string
          created_at?: string
          difficulty_level?: string
          id?: number
          num_out_num_score?: string | null
          number_of_words_to_play?: number
          percentage_score?: number | null
          user_id?: string
          words_guessed_correctly?: number | null
          xp_earned?: number | null
        }
        Relationships: []
      }
      letter_launch_words: {
        Row: {
          category: string
          difficulty: string
          id: number
          individual_letters: string[]
          number_of_letters: number
          word: string
        }
        Insert: {
          category: string
          difficulty: string
          id?: number
          individual_letters: string[]
          number_of_letters: number
          word: string
        }
        Update: {
          category?: string
          difficulty?: string
          id?: number
          individual_letters?: string[]
          number_of_letters?: number
          word?: string
        }
        Relationships: []
      }
      medication_logging: {
        Row: {
          created_at: string | null
          id: number
          medication_id: number
          notes: string | null
          taken_at: string | null
          taken_on_schedule: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          medication_id: number
          notes?: string | null
          taken_at?: string | null
          taken_on_schedule?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          medication_id?: number
          notes?: string | null
          taken_at?: string | null
          taken_on_schedule?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "medication_logging_medication_id_fkey"
            columns: ["medication_id"]
            isOneToOne: false
            referencedRelation: "user_medications"
            referencedColumns: ["id"]
          },
        ]
      }
      messages_on_grades_and_lessons_and_snippets: {
        Row: {
          content: string | null
          created_at: string
          edited_at: string | null
          file_urls: number[] | null
          grade_id: number | null
          id: number
          lesson_id: number | null
          on_grade: boolean | null
          on_lesson: boolean | null
          on_snippet: boolean | null
          snippet_id: number | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          edited_at?: string | null
          file_urls?: number[] | null
          grade_id?: number | null
          id?: number
          lesson_id?: number | null
          on_grade?: boolean | null
          on_lesson?: boolean | null
          on_snippet?: boolean | null
          snippet_id?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          edited_at?: string | null
          file_urls?: number[] | null
          grade_id?: number | null
          id?: number
          lesson_id?: number | null
          on_grade?: boolean | null
          on_lesson?: boolean | null
          on_snippet?: boolean | null
          snippet_id?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      milestone_goals: {
        Row: {
          achieved: boolean | null
          created_at: string
          emoji: string | null
          id: number
          milestone: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          user: string | null
        }
        Insert: {
          achieved?: boolean | null
          created_at?: string
          emoji?: string | null
          id?: number
          milestone?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          user?: string | null
        }
        Update: {
          achieved?: boolean | null
          created_at?: string
          emoji?: string | null
          id?: number
          milestone?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          user?: string | null
        }
        Relationships: []
      }
      milestone_suggestions: {
        Row: {
          emoji: string
          id: number
          milestone: string
          treasure_name: Database["public"]["Enums"]["treasure_types"]
        }
        Insert: {
          emoji: string
          id?: number
          milestone: string
          treasure_name: Database["public"]["Enums"]["treasure_types"]
        }
        Update: {
          emoji?: string
          id?: number
          milestone?: string
          treasure_name?: Database["public"]["Enums"]["treasure_types"]
        }
        Relationships: []
      }
      most_improved_history: {
        Row: {
          scope: Database["public"]["Enums"]["scopes"]
          scope_id: number
          user_id: string
          week_start_date: string
          weekly_improvement_percentage: number
        }
        Insert: {
          scope: Database["public"]["Enums"]["scopes"]
          scope_id: number
          user_id: string
          week_start_date: string
          weekly_improvement_percentage: number
        }
        Update: {
          scope?: Database["public"]["Enums"]["scopes"]
          scope_id?: number
          user_id?: string
          week_start_date?: string
          weekly_improvement_percentage?: number
        }
        Relationships: []
      }
      ndis_participants: {
        Row: {
          last_report_generated: string | null
          ndis_plan_number: string | null
          participant_id: string
          reporting_frequency: unknown | null
        }
        Insert: {
          last_report_generated?: string | null
          ndis_plan_number?: string | null
          participant_id: string
          reporting_frequency?: unknown | null
        }
        Update: {
          last_report_generated?: string | null
          ndis_plan_number?: string | null
          participant_id?: string
          reporting_frequency?: unknown | null
        }
        Relationships: [
          {
            foreignKeyName: "ndis_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ndis_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: true
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "ndis_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: true
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "ndis_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: true
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "ndis_participants_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: true
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      ndis_reports: {
        Row: {
          generated_at: string | null
          participant_id: string | null
          report_data: Json | null
          report_id: string
          report_period: unknown | null
        }
        Insert: {
          generated_at?: string | null
          participant_id?: string | null
          report_data?: Json | null
          report_id: string
          report_period?: unknown | null
        }
        Update: {
          generated_at?: string | null
          participant_id?: string | null
          report_data?: Json | null
          report_id?: string
          report_period?: unknown | null
        }
        Relationships: [
          {
            foreignKeyName: "ndis_reports_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "ndis_participants"
            referencedColumns: ["participant_id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          id: number
          push_frequency_in_minutes: number | null
          push_notifications: boolean | null
          type_of_push_notifications_allowed:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          type_of_regular_notifications:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          updated_at: string
          user: string | null
        }
        Insert: {
          id?: number
          push_frequency_in_minutes?: number | null
          push_notifications?: boolean | null
          type_of_push_notifications_allowed?:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          type_of_regular_notifications?:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          updated_at?: string
          user?: string | null
        }
        Update: {
          id?: number
          push_frequency_in_minutes?: number | null
          push_notifications?: boolean | null
          type_of_push_notifications_allowed?:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          type_of_regular_notifications?:
            | Database["public"]["Enums"]["notification_types"][]
            | null
          updated_at?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_preferences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "notification_preferences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "notification_preferences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "notification_preferences_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      notifications: {
        Row: {
          content_preview: string | null
          created_at: string
          date: string | null
          emoji: string | null
          id: number
          notification_img: string | null
          notifying_about_title: string | null
          notifying_from_name: string | null
          page_link: string | null
          read_status: boolean | null
          type: Database["public"]["Enums"]["notification_types"] | null
          user_id: string | null
        }
        Insert: {
          content_preview?: string | null
          created_at?: string
          date?: string | null
          emoji?: string | null
          id?: number
          notification_img?: string | null
          notifying_about_title?: string | null
          notifying_from_name?: string | null
          page_link?: string | null
          read_status?: boolean | null
          type?: Database["public"]["Enums"]["notification_types"] | null
          user_id?: string | null
        }
        Update: {
          content_preview?: string | null
          created_at?: string
          date?: string | null
          emoji?: string | null
          id?: number
          notification_img?: string | null
          notifying_about_title?: string | null
          notifying_from_name?: string | null
          page_link?: string | null
          read_status?: boolean | null
          type?: Database["public"]["Enums"]["notification_types"] | null
          user_id?: string | null
        }
        Relationships: []
      }
      offensive_terms: {
        Row: {
          canonical_form_1: string | null
          canonical_form_2: string | null
          canonical_form_3: string | null
          category_1: string | null
          category_2: string | null
          category_3: string | null
          created_at: string | null
          id: number
          severity_description: string | null
          severity_rating: number | null
          text: string
        }
        Insert: {
          canonical_form_1?: string | null
          canonical_form_2?: string | null
          canonical_form_3?: string | null
          category_1?: string | null
          category_2?: string | null
          category_3?: string | null
          created_at?: string | null
          id?: number
          severity_description?: string | null
          severity_rating?: number | null
          text: string
        }
        Update: {
          canonical_form_1?: string | null
          canonical_form_2?: string | null
          canonical_form_3?: string | null
          category_1?: string | null
          category_2?: string | null
          category_3?: string | null
          created_at?: string | null
          id?: number
          severity_description?: string | null
          severity_rating?: number | null
          text?: string
        }
        Relationships: []
      }
      poll_options: {
        Row: {
          created_at: string
          id: number
          option_text: string | null
          poll_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          option_text?: string | null
          poll_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          option_text?: string | null
          poll_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "poll_options_poll_id_fkey"
            columns: ["poll_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
        ]
      }
      poll_responses: {
        Row: {
          created_at: string
          id: number
          option_id: number | null
          poll_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          option_id?: number | null
          poll_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          option_id?: number | null
          poll_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "poll_responses_option_id_fkey"
            columns: ["option_id"]
            isOneToOne: false
            referencedRelation: "poll_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poll_responses_poll_id_fkey"
            columns: ["poll_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "poll_responses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "poll_responses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      polls: {
        Row: {
          author: string | null
          created_at: string
          expires_at: string | null
          id: number
          is_multiple_choice: boolean | null
          question: string | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          expires_at?: string | null
          id?: number
          is_multiple_choice?: boolean | null
          question?: string | null
        }
        Update: {
          author?: string | null
          created_at?: string
          expires_at?: string | null
          id?: number
          is_multiple_choice?: boolean | null
          question?: string | null
        }
        Relationships: []
      }
      profile_career_interests: {
        Row: {
          career_path: string
          experience_level: number | null
          last_used: string | null
          profile_id: string
        }
        Insert: {
          career_path: string
          experience_level?: number | null
          last_used?: string | null
          profile_id: string
        }
        Update: {
          career_path?: string
          experience_level?: number | null
          last_used?: string | null
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_career_interests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_career_interests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_career_interests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_career_interests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_career_interests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      profile_diff_methods: {
        Row: {
          method_id: number
          profile_id: string
        }
        Insert: {
          method_id: number
          profile_id: string
        }
        Update: {
          method_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_diff_methods_method_id_fkey"
            columns: ["method_id"]
            isOneToOne: false
            referencedRelation: "differentiation_methods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_diff_methods_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_diff_methods_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_diff_methods_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_diff_methods_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_diff_methods_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      profile_learning_types: {
        Row: {
          learning_type_id: number
          profile_id: string
        }
        Insert: {
          learning_type_id: number
          profile_id: string
        }
        Update: {
          learning_type_id?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_learning_types_learning_type_id_fkey"
            columns: ["learning_type_id"]
            isOneToOne: false
            referencedRelation: "learning_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_learning_types_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_learning_types_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_learning_types_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_learning_types_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "profile_learning_types_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      profiles: {
        Row: {
          academic_level: string | null
          backup_email: string | null
          career_interests: string[] | null
          common_emotional_triggers: string | null
          communication_station_success_scales: number[] | null
          communication_station_visits: number | null
          cover_image_pro: string | null
          created_time: string
          current_medal_display_name: string | null
          days_active_streak: number | null
          differentiation_methods: string[] | null
          display_name: string | null
          display_name_at_school: string | null
          dob: string | null
          email: string | null
          first_name: string | null
          guardian_email: string | null
          has_friends: boolean | null
          id: string
          is_active: boolean | null
          is_ai: boolean | null
          is_child: boolean | null
          is_government: boolean | null
          is_ndis_participant: boolean | null
          is_parent: boolean | null
          is_school_admin: boolean | null
          is_student: boolean | null
          is_teacher: boolean | null
          language: string | null
          last_active_time: string
          last_comm_station_visit: string | null
          last_name: string | null
          learning_motivations: string | null
          learning_style_preferences: string[] | null
          location_lat_lng: string | null
          longest_days_active_streak_ever: number | null
          middle_names: string | null
          ndis_data_consent: string | null
          neon_mode: boolean | null
          next_scheduling_time: string
          parent_verified: boolean | null
          phone_number: string | null
          photo_url: string | null
          points_till_next_level: number | null
          points_to_level: number | null
          professional_development_goals: string | null
          profile_set_up_complete: boolean | null
          role_in_schools: string | null
          short_description: string | null
          total_points_at_next_level: number | null
          user_level: number | null
          workplace_learning_needs: string[] | null
        }
        Insert: {
          academic_level?: string | null
          backup_email?: string | null
          career_interests?: string[] | null
          common_emotional_triggers?: string | null
          communication_station_success_scales?: number[] | null
          communication_station_visits?: number | null
          cover_image_pro?: string | null
          created_time?: string
          current_medal_display_name?: string | null
          days_active_streak?: number | null
          differentiation_methods?: string[] | null
          display_name?: string | null
          display_name_at_school?: string | null
          dob?: string | null
          email?: string | null
          first_name?: string | null
          guardian_email?: string | null
          has_friends?: boolean | null
          id: string
          is_active?: boolean | null
          is_ai?: boolean | null
          is_child?: boolean | null
          is_government?: boolean | null
          is_ndis_participant?: boolean | null
          is_parent?: boolean | null
          is_school_admin?: boolean | null
          is_student?: boolean | null
          is_teacher?: boolean | null
          language?: string | null
          last_active_time?: string
          last_comm_station_visit?: string | null
          last_name?: string | null
          learning_motivations?: string | null
          learning_style_preferences?: string[] | null
          location_lat_lng?: string | null
          longest_days_active_streak_ever?: number | null
          middle_names?: string | null
          ndis_data_consent?: string | null
          neon_mode?: boolean | null
          next_scheduling_time?: string
          parent_verified?: boolean | null
          phone_number?: string | null
          photo_url?: string | null
          points_till_next_level?: number | null
          points_to_level?: number | null
          professional_development_goals?: string | null
          profile_set_up_complete?: boolean | null
          role_in_schools?: string | null
          short_description?: string | null
          total_points_at_next_level?: number | null
          user_level?: number | null
          workplace_learning_needs?: string[] | null
        }
        Update: {
          academic_level?: string | null
          backup_email?: string | null
          career_interests?: string[] | null
          common_emotional_triggers?: string | null
          communication_station_success_scales?: number[] | null
          communication_station_visits?: number | null
          cover_image_pro?: string | null
          created_time?: string
          current_medal_display_name?: string | null
          days_active_streak?: number | null
          differentiation_methods?: string[] | null
          display_name?: string | null
          display_name_at_school?: string | null
          dob?: string | null
          email?: string | null
          first_name?: string | null
          guardian_email?: string | null
          has_friends?: boolean | null
          id?: string
          is_active?: boolean | null
          is_ai?: boolean | null
          is_child?: boolean | null
          is_government?: boolean | null
          is_ndis_participant?: boolean | null
          is_parent?: boolean | null
          is_school_admin?: boolean | null
          is_student?: boolean | null
          is_teacher?: boolean | null
          language?: string | null
          last_active_time?: string
          last_comm_station_visit?: string | null
          last_name?: string | null
          learning_motivations?: string | null
          learning_style_preferences?: string[] | null
          location_lat_lng?: string | null
          longest_days_active_streak_ever?: number | null
          middle_names?: string | null
          ndis_data_consent?: string | null
          neon_mode?: boolean | null
          next_scheduling_time?: string
          parent_verified?: boolean | null
          phone_number?: string | null
          photo_url?: string | null
          points_till_next_level?: number | null
          points_to_level?: number | null
          professional_development_goals?: string | null
          profile_set_up_complete?: boolean | null
          role_in_schools?: string | null
          short_description?: string | null
          total_points_at_next_level?: number | null
          user_level?: number | null
          workplace_learning_needs?: string[] | null
        }
        Relationships: []
      }
      project_users: {
        Row: {
          id: number
          project_id: number | null
          role: string | null
          user_id: string
        }
        Insert: {
          id?: number
          project_id?: number | null
          role?: string | null
          user_id: string
        }
        Update: {
          id?: number
          project_id?: number | null
          role?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_users_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "project_users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      projects: {
        Row: {
          budget: number | null
          completed_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          emoji: string | null
          priority: string | null
          project_id: number
          project_name: string
          start_date: string | null
          status: string | null
        }
        Insert: {
          budget?: number | null
          completed_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          priority?: string | null
          project_id?: number
          project_name: string
          start_date?: string | null
          status?: string | null
        }
        Update: {
          budget?: number | null
          completed_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          priority?: string | null
          project_id?: number
          project_name?: string
          start_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "projects_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      quiz_progress_tracking: {
        Row: {
          completion_date: string
          correct_answers: number
          id: number
          quiz_id: number
          retry_count: number
          score: number | null
          student_id: string
          total_questions: number
          wrong_answers: number
        }
        Insert: {
          completion_date?: string
          correct_answers: number
          id?: number
          quiz_id: number
          retry_count?: number
          score?: number | null
          student_id: string
          total_questions: number
          wrong_answers: number
        }
        Update: {
          completion_date?: string
          correct_answers?: number
          id?: number
          quiz_id?: number
          retry_count?: number
          score?: number | null
          student_id?: string
          total_questions?: number
          wrong_answers?: number
        }
        Relationships: [
          {
            foreignKeyName: "quiz_progress_tracking_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "student_snippet_quiz"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_questions: {
        Row: {
          all_quiz_answers: string[] | null
          author: string
          created_at: string | null
          id: number
          public: boolean
          question: string | null
          quiz_right_answer: string
          subject: string
        }
        Insert: {
          all_quiz_answers?: string[] | null
          author: string
          created_at?: string | null
          id?: never
          public?: boolean
          question?: string | null
          quiz_right_answer: string
          subject: string
        }
        Update: {
          all_quiz_answers?: string[] | null
          author?: string
          created_at?: string | null
          id?: never
          public?: boolean
          question?: string | null
          quiz_right_answer?: string
          subject?: string
        }
        Relationships: []
      }
      quizzes_assigned: {
        Row: {
          assigned_at: string
          author: string
          created_at: string
          id: number
          quiz_description: string | null
          quiz_id: number
          quiz_q_correct_ids: number[]
          quiz_q_ids: number[]
          quiz_qs_wrong: number[] | null
          subject: string
          user_assigned: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          author: string
          created_at?: string
          id?: never
          quiz_description?: string | null
          quiz_id: number
          quiz_q_correct_ids: number[]
          quiz_q_ids: number[]
          quiz_qs_wrong?: number[] | null
          subject: string
          user_assigned: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          author?: string
          created_at?: string
          id?: never
          quiz_description?: string | null
          quiz_id?: number
          quiz_q_correct_ids?: number[]
          quiz_q_ids?: number[]
          quiz_qs_wrong?: number[] | null
          subject?: string
          user_assigned?: string
          user_id?: string
        }
        Relationships: []
      }
      quizzes_templates: {
        Row: {
          author: string
          created_at: string
          id: number
          public: boolean | null
          quiz_description: string | null
          quiz_q_ids: number[]
          subject: string
          title_of_quiz: string | null
        }
        Insert: {
          author: string
          created_at?: string
          id?: never
          public?: boolean | null
          quiz_description?: string | null
          quiz_q_ids: number[]
          subject: string
          title_of_quiz?: string | null
        }
        Update: {
          author?: string
          created_at?: string
          id?: never
          public?: boolean | null
          quiz_description?: string | null
          quiz_q_ids?: number[]
          subject?: string
          title_of_quiz?: string | null
        }
        Relationships: []
      }
      quotes: {
        Row: {
          author: string
          id: number
          is_complex: boolean
          quote_text: string
        }
        Insert: {
          author: string
          id?: never
          is_complex?: boolean
          quote_text: string
        }
        Update: {
          author?: string
          id?: never
          is_complex?: boolean
          quote_text?: string
        }
        Relationships: []
      }
      relationship_reciprocal_mapping: {
        Row: {
          relationship_from: Database["public"]["Enums"]["relationship_type"]
          relationship_to: Database["public"]["Enums"]["relationship_type"]
        }
        Insert: {
          relationship_from: Database["public"]["Enums"]["relationship_type"]
          relationship_to: Database["public"]["Enums"]["relationship_type"]
        }
        Update: {
          relationship_from?: Database["public"]["Enums"]["relationship_type"]
          relationship_to?: Database["public"]["Enums"]["relationship_type"]
        }
        Relationships: []
      }
      relationships: {
        Row: {
          blocked: boolean | null
          created_at: string
          currently_accepted_friend: boolean | null
          id: number
          is_support_network: boolean
          other_user: string | null
          relationship_to_other_user:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          relationship_to_this_user:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          support_type: Database["public"]["Enums"]["support_types"] | null
          this_user: string | null
          visibility_level:
            | Database["public"]["Enums"]["visibility_levels"]
            | null
        }
        Insert: {
          blocked?: boolean | null
          created_at?: string
          currently_accepted_friend?: boolean | null
          id?: number
          is_support_network?: boolean
          other_user?: string | null
          relationship_to_other_user?:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          relationship_to_this_user?:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          support_type?: Database["public"]["Enums"]["support_types"] | null
          this_user?: string | null
          visibility_level?:
            | Database["public"]["Enums"]["visibility_levels"]
            | null
        }
        Update: {
          blocked?: boolean | null
          created_at?: string
          currently_accepted_friend?: boolean | null
          id?: number
          is_support_network?: boolean
          other_user?: string | null
          relationship_to_other_user?:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          relationship_to_this_user?:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          support_type?: Database["public"]["Enums"]["support_types"] | null
          this_user?: string | null
          visibility_level?:
            | Database["public"]["Enums"]["visibility_levels"]
            | null
        }
        Relationships: []
      }
      reward_redemptions: {
        Row: {
          points_spent: number
          redeemed_at: string | null
          redemption_id: string
          reward_id: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          points_spent: number
          redeemed_at?: string | null
          redemption_id?: string
          reward_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          points_spent?: number
          redeemed_at?: string | null
          redemption_id?: string
          reward_id?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reward_redemptions_reward_id_fkey"
            columns: ["reward_id"]
            isOneToOne: false
            referencedRelation: "rewards_catalog"
            referencedColumns: ["reward_id"]
          },
          {
            foreignKeyName: "reward_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reward_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "reward_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "reward_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "reward_redemptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      reward_suggestions: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          emoji: string | null
          suggestion_id: string
          title: string | null
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          value: number | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          emoji?: string | null
          suggestion_id?: string
          title?: string | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          value?: number | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          emoji?: string | null
          suggestion_id?: string
          title?: string | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          value?: number | null
        }
        Relationships: []
      }
      rewards_catalog: {
        Row: {
          current_treasure: number | null
          description: string | null
          emoji: string | null
          enough_treasure_to_claim: boolean | null
          last_updated_by: string | null
          name: string
          offered_by: string | null
          offered_to: string | null
          required_treasure: number | null
          reward_id: string
          stock_quantity: number | null
          total_required: number | null
          treasure_id: number | null
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          valid_from: string | null
          valid_to: string | null
        }
        Insert: {
          current_treasure?: number | null
          description?: string | null
          emoji?: string | null
          enough_treasure_to_claim?: boolean | null
          last_updated_by?: string | null
          name: string
          offered_by?: string | null
          offered_to?: string | null
          required_treasure?: number | null
          reward_id?: string
          stock_quantity?: number | null
          total_required?: number | null
          treasure_id?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          valid_from?: string | null
          valid_to?: string | null
        }
        Update: {
          current_treasure?: number | null
          description?: string | null
          emoji?: string | null
          enough_treasure_to_claim?: boolean | null
          last_updated_by?: string | null
          name?: string
          offered_by?: string | null
          offered_to?: string | null
          required_treasure?: number | null
          reward_id?: string
          stock_quantity?: number | null
          total_required?: number | null
          treasure_id?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          valid_from?: string | null
          valid_to?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rewards_catalog_offered_by_fkey"
            columns: ["offered_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_by_fkey"
            columns: ["offered_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_by_fkey"
            columns: ["offered_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_by_fkey"
            columns: ["offered_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_by_fkey"
            columns: ["offered_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_to_fkey"
            columns: ["offered_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_to_fkey"
            columns: ["offered_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_to_fkey"
            columns: ["offered_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_to_fkey"
            columns: ["offered_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "rewards_catalog_offered_to_fkey"
            columns: ["offered_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      school_invites: {
        Row: {
          accepted: boolean | null
          created_at: string
          id: number
          role: string | null
          school: number | null
          user: string | null
        }
        Insert: {
          accepted?: boolean | null
          created_at?: string
          id?: number
          role?: string | null
          school?: number | null
          user?: string | null
        }
        Update: {
          accepted?: boolean | null
          created_at?: string
          id?: number
          role?: string | null
          school?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "school_invites_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "school_invites_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "school_invites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "school_invites_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      school_permission_forms: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          date_due: string | null
          description: string | null
          extra_info_requested: string | null
          id: number
          title: string | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          date_due?: string | null
          description?: string | null
          extra_info_requested?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          date_due?: string | null
          description?: string | null
          extra_info_requested?: string | null
          id?: number
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "school_permission_forms_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "school_permission_forms_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "school_permission_forms_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "school_permission_forms_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "school_permission_forms_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      schools: {
        Row: {
          abn: string | null
          company_name: string | null
          created_at: string
          created_by: string | null
          id: number
          location_lat_lng: string | null
          location_written: string | null
          name_of_school: string | null
          number_of_classes: number | null
          school_email: string | null
          school_logo: string | null
          school_tagline: string | null
          student_teacher_ratio: string | null
        }
        Insert: {
          abn?: string | null
          company_name?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          location_lat_lng?: string | null
          location_written?: string | null
          name_of_school?: string | null
          number_of_classes?: number | null
          school_email?: string | null
          school_logo?: string | null
          school_tagline?: string | null
          student_teacher_ratio?: string | null
        }
        Update: {
          abn?: string | null
          company_name?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          location_lat_lng?: string | null
          location_written?: string | null
          name_of_school?: string | null
          number_of_classes?: number | null
          school_email?: string | null
          school_logo?: string | null
          school_tagline?: string | null
          student_teacher_ratio?: string | null
        }
        Relationships: []
      }
      sleep_tracking: {
        Row: {
          created_at: string
          end_time: string | null
          id: number
          sleep_quality: number | null
          start_time: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          end_time?: string | null
          id?: number
          sleep_quality?: number | null
          start_time?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          end_time?: string | null
          id?: number
          sleep_quality?: number | null
          start_time?: string | null
          user?: string | null
        }
        Relationships: []
      }
      social_comments: {
        Row: {
          content: string | null
          created_at: string
          id: number
          social_post_ref: number | null
          user_who_comments: string | null
          users_who_liked: string[] | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          social_post_ref?: number | null
          user_who_comments?: string | null
          users_who_liked?: string[] | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          social_post_ref?: number | null
          user_who_comments?: string | null
          users_who_liked?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "social_comments_social_post_ref_fkey"
            columns: ["social_post_ref"]
            isOneToOne: false
            referencedRelation: "filtered_social_posts"
            referencedColumns: ["post_id"]
          },
          {
            foreignKeyName: "social_comments_social_post_ref_fkey"
            columns: ["social_post_ref"]
            isOneToOne: false
            referencedRelation: "social_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      social_post_visibility_settings: {
        Row: {
          allowed_relationship_types: string[]
          visibility_level: Database["public"]["Enums"]["social_post_visibility_levels"]
        }
        Insert: {
          allowed_relationship_types: string[]
          visibility_level: Database["public"]["Enums"]["social_post_visibility_levels"]
        }
        Update: {
          allowed_relationship_types?: string[]
          visibility_level?: Database["public"]["Enums"]["social_post_visibility_levels"]
        }
        Relationships: []
      }
      social_posts: {
        Row: {
          author: string | null
          comments: string[] | null
          content: string | null
          created_at: string
          file_urls: number[] | null
          id: number
          number_of_comments: number | null
          priority_for_users_to_see: boolean
          tagged_users: string[] | null
          title: string | null
          users_who_liked: string[] | null
          visibility_level: Database["public"]["Enums"]["social_post_visibility_levels"]
          visible_to_users: string[] | null
        }
        Insert: {
          author?: string | null
          comments?: string[] | null
          content?: string | null
          created_at?: string
          file_urls?: number[] | null
          id?: number
          number_of_comments?: number | null
          priority_for_users_to_see?: boolean
          tagged_users?: string[] | null
          title?: string | null
          users_who_liked?: string[] | null
          visibility_level?: Database["public"]["Enums"]["social_post_visibility_levels"]
          visible_to_users?: string[] | null
        }
        Update: {
          author?: string | null
          comments?: string[] | null
          content?: string | null
          created_at?: string
          file_urls?: number[] | null
          id?: number
          number_of_comments?: number | null
          priority_for_users_to_see?: boolean
          tagged_users?: string[] | null
          title?: string | null
          users_who_liked?: string[] | null
          visibility_level?: Database["public"]["Enums"]["social_post_visibility_levels"]
          visible_to_users?: string[] | null
        }
        Relationships: []
      }
      student_files: {
        Row: {
          career_interests: string[] | null
          common_emotional_triggers: string[] | null
          created_at: string
          differentiation_methods_working: number[] | null
          flash_cards_high_score_percentage: number | null
          flashcard_game_scores: number[] | null
          grade_year_level: string | null
          id: number
          interest_and_motivations: string[] | null
          last_flashcard_game_id: string | null
          learning_types_working: number[] | null
          student: string | null
        }
        Insert: {
          career_interests?: string[] | null
          common_emotional_triggers?: string[] | null
          created_at?: string
          differentiation_methods_working?: number[] | null
          flash_cards_high_score_percentage?: number | null
          flashcard_game_scores?: number[] | null
          grade_year_level?: string | null
          id?: number
          interest_and_motivations?: string[] | null
          last_flashcard_game_id?: string | null
          learning_types_working?: number[] | null
          student?: string | null
        }
        Update: {
          career_interests?: string[] | null
          common_emotional_triggers?: string[] | null
          created_at?: string
          differentiation_methods_working?: number[] | null
          flash_cards_high_score_percentage?: number | null
          flashcard_game_scores?: number[] | null
          grade_year_level?: string | null
          id?: number
          interest_and_motivations?: string[] | null
          last_flashcard_game_id?: string | null
          learning_types_working?: number[] | null
          student?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_files_student_fkey"
            columns: ["student"]
            isOneToOne: true
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "student_files_student_fkey"
            columns: ["student"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      student_grades: {
        Row: {
          class_id: number
          created_at: string
          evidence_urls: string[] | null
          feedback: string | null
          grade: Json
          grading_method_id: number
          id: number
          lesson_id: number
          rank: number | null
          student_id: string
          subject_id: number | null
          updated_at: string
        }
        Insert: {
          class_id: number
          created_at?: string
          evidence_urls?: string[] | null
          feedback?: string | null
          grade: Json
          grading_method_id: number
          id?: number
          lesson_id: number
          rank?: number | null
          student_id: string
          subject_id?: number | null
          updated_at?: string
        }
        Update: {
          class_id?: number
          created_at?: string
          evidence_urls?: string[] | null
          feedback?: string | null
          grade?: Json
          grading_method_id?: number
          id?: number
          lesson_id?: number
          rank?: number | null
          student_id?: string
          subject_id?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_grades_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_grades_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "student_grades_lesson_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_grades_method_fkey"
            columns: ["grading_method_id"]
            isOneToOne: false
            referencedRelation: "lesson_grading_methods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_grades_subject_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      student_risk_assessments: {
        Row: {
          assessment_date: string
          id: number
          recommendation: string | null
          risk_factors: Json | null
          risk_score: number
          student_id: string
        }
        Insert: {
          assessment_date?: string
          id?: number
          recommendation?: string | null
          risk_factors?: Json | null
          risk_score: number
          student_id: string
        }
        Update: {
          assessment_date?: string
          id?: number
          recommendation?: string | null
          risk_factors?: Json | null
          risk_score?: number
          student_id?: string
        }
        Relationships: []
      }
      student_snippet_quiz: {
        Row: {
          author: string | null
          average_time_per_question: unknown | null
          completion_time: unknown | null
          correct_questions: string[] | null
          created_at: string
          difficulty_level: number | null
          finished_quiz: boolean | null
          grade: string | null
          id: number
          lesson_snippet: number | null
          name: string | null
          progress_milestones: Json | null
          public: boolean | null
          quiz_category: string | null
          retry_count: number | null
          score: number | null
          student: string | null
          subject: string | null
          total_questions: number | null
          wrong_questions: string[] | null
        }
        Insert: {
          author?: string | null
          average_time_per_question?: unknown | null
          completion_time?: unknown | null
          correct_questions?: string[] | null
          created_at?: string
          difficulty_level?: number | null
          finished_quiz?: boolean | null
          grade?: string | null
          id?: number
          lesson_snippet?: number | null
          name?: string | null
          progress_milestones?: Json | null
          public?: boolean | null
          quiz_category?: string | null
          retry_count?: number | null
          score?: number | null
          student?: string | null
          subject?: string | null
          total_questions?: number | null
          wrong_questions?: string[] | null
        }
        Update: {
          author?: string | null
          average_time_per_question?: unknown | null
          completion_time?: unknown | null
          correct_questions?: string[] | null
          created_at?: string
          difficulty_level?: number | null
          finished_quiz?: boolean | null
          grade?: string | null
          id?: number
          lesson_snippet?: number | null
          name?: string | null
          progress_milestones?: Json | null
          public?: boolean | null
          quiz_category?: string | null
          retry_count?: number | null
          score?: number | null
          student?: string | null
          subject?: string | null
          total_questions?: number | null
          wrong_questions?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "student_quizzes_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "student_quizzes_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_quizzes_lesson_snippet_fkey"
            columns: ["lesson_snippet"]
            isOneToOne: false
            referencedRelation: "lesson_snippets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_quizzes_student_fkey"
            columns: ["student"]
            isOneToOne: false
            referencedRelation: "teacher_insights"
            referencedColumns: ["teacher_id"]
          },
          {
            foreignKeyName: "student_quizzes_student_fkey"
            columns: ["student"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subject_categories: {
        Row: {
          category_name: string
          id: number
        }
        Insert: {
          category_name: string
          id?: number
        }
        Update: {
          category_name?: string
          id?: number
        }
        Relationships: []
      }
      subjects: {
        Row: {
          category_name: string | null
          id: number
          subject_name: string | null
        }
        Insert: {
          category_name?: string | null
          id?: number
          subject_name?: string | null
        }
        Update: {
          category_name?: string | null
          id?: number
          subject_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subjects_category_name_fkey"
            columns: ["category_name"]
            isOneToOne: false
            referencedRelation: "subject_categories"
            referencedColumns: ["category_name"]
          },
        ]
      }
      support_services: {
        Row: {
          category: Database["public"]["Enums"]["support_categories"]
          description: string | null
          id: number
        }
        Insert: {
          category: Database["public"]["Enums"]["support_categories"]
          description?: string | null
          id?: number
        }
        Update: {
          category?: Database["public"]["Enums"]["support_categories"]
          description?: string | null
          id?: number
        }
        Relationships: []
      }
      support_types_details: {
        Row: {
          description: string | null
          id: number
          support_type: Database["public"]["Enums"]["support_types"]
        }
        Insert: {
          description?: string | null
          id?: number
          support_type: Database["public"]["Enums"]["support_types"]
        }
        Update: {
          description?: string | null
          id?: number
          support_type?: Database["public"]["Enums"]["support_types"]
        }
        Relationships: []
      }
      support_workers: {
        Row: {
          bio: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          currently_available: boolean | null
          experience_years: number | null
          id: number
          location_lat_lng: string | null
          organisation_id: number | null
          organisation_name: string | null
          primary_support_type: Database["public"]["Enums"]["support_types"]
          qualifications: string | null
          support_types: Database["public"]["Enums"]["support_types"][]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          bio?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          currently_available?: boolean | null
          experience_years?: number | null
          id?: number
          location_lat_lng?: string | null
          organisation_id?: number | null
          organisation_name?: string | null
          primary_support_type: Database["public"]["Enums"]["support_types"]
          qualifications?: string | null
          support_types: Database["public"]["Enums"]["support_types"][]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          bio?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          currently_available?: boolean | null
          experience_years?: number | null
          id?: number
          location_lat_lng?: string | null
          organisation_id?: number | null
          organisation_name?: string | null
          primary_support_type?: Database["public"]["Enums"]["support_types"]
          qualifications?: string | null
          support_types?: Database["public"]["Enums"]["support_types"][]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      task_comments: {
        Row: {
          content: string
          created_at: string | null
          id: number
          task_id: number | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id: number
          task_id?: number | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: number
          task_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_comments_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "task_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "task_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "task_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "task_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      task_dependencies: {
        Row: {
          depends_on: number | null
          task_id: number
        }
        Insert: {
          depends_on?: number | null
          task_id: number
        }
        Update: {
          depends_on?: number | null
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "task_dependencies_depends_on_fkey"
            columns: ["depends_on"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          },
          {
            foreignKeyName: "task_dependencies_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          },
        ]
      }
      task_suggestions: {
        Row: {
          actual_minutes: number | null
          age_range: string | null
          created_at: string | null
          description: string | null
          difficulty_rating: number | null
          estimated_minutes: number | null
          suggestion_id: number
          title: string
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          value: number | null
        }
        Insert: {
          actual_minutes?: number | null
          age_range?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_rating?: number | null
          estimated_minutes?: number | null
          suggestion_id?: number
          title: string
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          value?: number | null
        }
        Update: {
          actual_minutes?: number | null
          age_range?: string | null
          created_at?: string | null
          description?: string | null
          difficulty_rating?: number | null
          estimated_minutes?: number | null
          suggestion_id?: number
          title?: string
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          value?: number | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          actual_minutes: number | null
          approved_at: string | null
          approved_by: string | null
          assigned_to: string | null
          auto_schedule: boolean | null
          completed_at: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          due_date: string | null
          emoji: string | null
          estimated_minutes: number | null
          is_recurring: boolean
          last_in_progress_at: string | null
          last_updated_by: string | null
          priority_level: number | null
          project_id: number | null
          recurring_days: string[] | null
          recurring_parent_id: number | null
          recurring_pattern: string | null
          requires_approval: boolean | null
          start_time: string | null
          status: string | null
          task_id: number
          title: string
          treasure_id: number | null
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value: number | null
        }
        Insert: {
          actual_minutes?: number | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          auto_schedule?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          estimated_minutes?: number | null
          is_recurring?: boolean
          last_in_progress_at?: string | null
          last_updated_by?: string | null
          priority_level?: number | null
          project_id?: number | null
          recurring_days?: string[] | null
          recurring_parent_id?: number | null
          recurring_pattern?: string | null
          requires_approval?: boolean | null
          start_time?: string | null
          status?: string | null
          task_id?: number
          title: string
          treasure_id?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value?: number | null
        }
        Update: {
          actual_minutes?: number | null
          approved_at?: string | null
          approved_by?: string | null
          assigned_to?: string | null
          auto_schedule?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          due_date?: string | null
          emoji?: string | null
          estimated_minutes?: number | null
          is_recurring?: boolean
          last_in_progress_at?: string | null
          last_updated_by?: string | null
          priority_level?: number | null
          project_id?: number | null
          recurring_days?: string[] | null
          recurring_parent_id?: number | null
          recurring_pattern?: string | null
          requires_approval?: boolean | null
          start_time?: string | null
          status?: string | null
          task_id?: number
          title?: string
          treasure_id?: number | null
          treasure_img?: string | null
          treasure_name?: Database["public"]["Enums"]["treasure_types"] | null
          treasure_value?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_tasks_assigned_to"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_tasks_assigned_to"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_tasks_assigned_to"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_tasks_assigned_to"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "fk_tasks_assigned_to"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "tasks_recurring_parent_id_fkey"
            columns: ["recurring_parent_id"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["task_id"]
          },
        ]
      }
      treasure_details: {
        Row: {
          created_at: string
          game_types: string[] | null
          id: number
          lesson_types:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          reward_types: string[] | null
          task_types: string[] | null
          treasure_type: Database["public"]["Enums"]["treasure_types"] | null
        }
        Insert: {
          created_at?: string
          game_types?: string[] | null
          id?: number
          lesson_types?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          reward_types?: string[] | null
          task_types?: string[] | null
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
        }
        Update: {
          created_at?: string
          game_types?: string[] | null
          id?: number
          lesson_types?:
            | Database["public"]["Enums"]["lesson_snippet_types"][]
            | null
          reward_types?: string[] | null
          task_types?: string[] | null
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
        }
        Relationships: []
      }
      user_ai_updates: {
        Row: {
          ai_message_type: string | null
          created_at: string
          id: number
          message_received: string | null
          prompt_sent: string | null
          user: string | null
        }
        Insert: {
          ai_message_type?: string | null
          created_at?: string
          id?: number
          message_received?: string | null
          prompt_sent?: string | null
          user?: string | null
        }
        Update: {
          ai_message_type?: string | null
          created_at?: string
          id?: number
          message_received?: string | null
          prompt_sent?: string | null
          user?: string | null
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: number | null
          earnt_at: string
          id: number
          user: string | null
        }
        Insert: {
          badge_id?: number | null
          earnt_at?: string
          id?: number
          user?: string | null
        }
        Update: {
          badge_id?: number | null
          earnt_at?: string
          id?: number
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "user_badges_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "student_risk_and_insights_mv"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "user_badges_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "user_badges_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "students_needing_intervention_mv"
            referencedColumns: ["student_id"]
          },
        ]
      }
      user_behaviour_trends: {
        Row: {
          academic_trend: Json | null
          behaviour_trend: Json | null
          emotional_trend: Json | null
          id: number
          last_updated: string | null
          risk_level: string | null
          social_trend: Json | null
          user_id: string
        }
        Insert: {
          academic_trend?: Json | null
          behaviour_trend?: Json | null
          emotional_trend?: Json | null
          id?: number
          last_updated?: string | null
          risk_level?: string | null
          social_trend?: Json | null
          user_id: string
        }
        Update: {
          academic_trend?: Json | null
          behaviour_trend?: Json | null
          emotional_trend?: Json | null
          id?: number
          last_updated?: string | null
          risk_level?: string | null
          social_trend?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      user_compliment_streaks: {
        Row: {
          compliment_day_streak: number | null
          compliments_today: number | null
          last_compliment_date: string | null
          longest_compliment_streak: number | null
          total_compliments_sent: number | null
          user_id: string
        }
        Insert: {
          compliment_day_streak?: number | null
          compliments_today?: number | null
          last_compliment_date?: string | null
          longest_compliment_streak?: number | null
          total_compliments_sent?: number | null
          user_id: string
        }
        Update: {
          compliment_day_streak?: number | null
          compliments_today?: number | null
          last_compliment_date?: string | null
          longest_compliment_streak?: number | null
          total_compliments_sent?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_disabilities: {
        Row: {
          description: string | null
          diagnosed_by: string | null
          diagnosis_date: string | null
          disability_name: string
          disability_type: Database["public"]["Enums"]["disability_type"]
          id: number
          impact_level:
            | Database["public"]["Enums"]["disability_impact_level"]
            | null
          requires_adjustments: boolean | null
          requires_aid: boolean | null
          status: Database["public"]["Enums"]["disability_status"]
          updated_at: string | null
          user_id: string
          who_noticed_first: Database["public"]["Enums"]["who_noticed_disability_first"]
        }
        Insert: {
          description?: string | null
          diagnosed_by?: string | null
          diagnosis_date?: string | null
          disability_name: string
          disability_type: Database["public"]["Enums"]["disability_type"]
          id?: never
          impact_level?:
            | Database["public"]["Enums"]["disability_impact_level"]
            | null
          requires_adjustments?: boolean | null
          requires_aid?: boolean | null
          status?: Database["public"]["Enums"]["disability_status"]
          updated_at?: string | null
          user_id: string
          who_noticed_first?: Database["public"]["Enums"]["who_noticed_disability_first"]
        }
        Update: {
          description?: string | null
          diagnosed_by?: string | null
          diagnosis_date?: string | null
          disability_name?: string
          disability_type?: Database["public"]["Enums"]["disability_type"]
          id?: never
          impact_level?:
            | Database["public"]["Enums"]["disability_impact_level"]
            | null
          requires_adjustments?: boolean | null
          requires_aid?: boolean | null
          status?: Database["public"]["Enums"]["disability_status"]
          updated_at?: string | null
          user_id?: string
          who_noticed_first?: Database["public"]["Enums"]["who_noticed_disability_first"]
        }
        Relationships: []
      }
      user_field_mapping: {
        Row: {
          table_name: string
          user_column: string
        }
        Insert: {
          table_name: string
          user_column: string
        }
        Update: {
          table_name?: string
          user_column?: string
        }
        Relationships: []
      }
      user_gratitude_streaks: {
        Row: {
          current_streak: number | null
          last_entry_date: string | null
          longest_streak: number | null
          user_id: string
        }
        Insert: {
          current_streak?: number | null
          last_entry_date?: string | null
          longest_streak?: number | null
          user_id: string
        }
        Update: {
          current_streak?: number | null
          last_entry_date?: string | null
          longest_streak?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_medal_totals: {
        Row: {
          medal: string | null
          total_count: number | null
          user: string | null
        }
        Insert: {
          medal?: string | null
          total_count?: number | null
          user?: string | null
        }
        Update: {
          medal?: string | null
          total_count?: number | null
          user?: string | null
        }
        Relationships: []
      }
      user_medications: {
        Row: {
          created_at: string | null
          currently_active: boolean | null
          days_of_week_to_take: string[] | null
          dosage: string | null
          end_date: string | null
          first_medication_time: string | null
          frequency: Database["public"]["Enums"]["medication_frequency_types"]
          id: number
          medication_name: string
          notes: string | null
          prescribed_by: string | null
          route_of_admin: string | null
          start_date: string | null
          times_to_take: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          currently_active?: boolean | null
          days_of_week_to_take?: string[] | null
          dosage?: string | null
          end_date?: string | null
          first_medication_time?: string | null
          frequency?: Database["public"]["Enums"]["medication_frequency_types"]
          id?: number
          medication_name: string
          notes?: string | null
          prescribed_by?: string | null
          route_of_admin?: string | null
          start_date?: string | null
          times_to_take?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          currently_active?: boolean | null
          days_of_week_to_take?: string[] | null
          dosage?: string | null
          end_date?: string | null
          first_medication_time?: string | null
          frequency?: Database["public"]["Enums"]["medication_frequency_types"]
          id?: number
          medication_name?: string
          notes?: string | null
          prescribed_by?: string | null
          route_of_admin?: string | null
          start_date?: string | null
          times_to_take?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_treasure_improvement_history: {
        Row: {
          created_at: string | null
          id: number
          improvement_percentage: number
          total_earned: number | null
          treasure_type: Database["public"]["Enums"]["treasure_types"] | null
          user_id: string
          week_start_date: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          improvement_percentage: number
          total_earned?: number | null
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
          user_id: string
          week_start_date: string
        }
        Update: {
          created_at?: string | null
          id?: number
          improvement_percentage?: number
          total_earned?: number | null
          treasure_type?: Database["public"]["Enums"]["treasure_types"] | null
          user_id?: string
          week_start_date?: string
        }
        Relationships: []
      }
      user_treasures: {
        Row: {
          amount: number | null
          last_updated: string | null
          total_earned_ever: number | null
          treasure_type: Database["public"]["Enums"]["treasure_types"]
          user_id: string
        }
        Insert: {
          amount?: number | null
          last_updated?: string | null
          total_earned_ever?: number | null
          treasure_type: Database["public"]["Enums"]["treasure_types"]
          user_id: string
        }
        Update: {
          amount?: number | null
          last_updated?: string | null
          total_earned_ever?: number | null
          treasure_type?: Database["public"]["Enums"]["treasure_types"]
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_time: string
          id: string
        }
        Insert: {
          created_time?: string
          id: string
        }
        Update: {
          created_time?: string
          id?: string
        }
        Relationships: []
      }
      users_in_chats: {
        Row: {
          chat_id: number | null
          created_at: string
          id: number
          last_time_viewed_chat: string | null
          user_id: string | null
        }
        Insert: {
          chat_id?: number | null
          created_at?: string
          id?: number
          last_time_viewed_chat?: string | null
          user_id?: string | null
        }
        Update: {
          chat_id?: number | null
          created_at?: string
          id?: number
          last_time_viewed_chat?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users_in_comm_stations: {
        Row: {
          colour_selected: string | null
          comm_station_id: number | null
          consequence_quest_needed: boolean | null
          empathy_score: number | null
          empathy_score_votes: number[] | null
          engaged_listener_scale: number | null
          engaged_listener_scale_votes: number[] | null
          id: number
          medals_awarded: string[] | null
          players_voting_they_do_comm_station_ids: string[] | null
          success_overall_scale: number | null
          success_overall_scale_votes: number[] | null
          user: string | null
        }
        Insert: {
          colour_selected?: string | null
          comm_station_id?: number | null
          consequence_quest_needed?: boolean | null
          empathy_score?: number | null
          empathy_score_votes?: number[] | null
          engaged_listener_scale?: number | null
          engaged_listener_scale_votes?: number[] | null
          id?: number
          medals_awarded?: string[] | null
          players_voting_they_do_comm_station_ids?: string[] | null
          success_overall_scale?: number | null
          success_overall_scale_votes?: number[] | null
          user?: string | null
        }
        Update: {
          colour_selected?: string | null
          comm_station_id?: number | null
          consequence_quest_needed?: boolean | null
          empathy_score?: number | null
          empathy_score_votes?: number[] | null
          engaged_listener_scale?: number | null
          engaged_listener_scale_votes?: number[] | null
          id?: number
          medals_awarded?: string[] | null
          players_voting_they_do_comm_station_ids?: string[] | null
          success_overall_scale?: number | null
          success_overall_scale_votes?: number[] | null
          user?: string | null
        }
        Relationships: []
      }
      users_in_school: {
        Row: {
          created_at: string
          id: number
          role_in_school: string | null
          school: number | null
          school_name: string | null
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          role_in_school?: string | null
          school?: number | null
          school_name?: string | null
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          role_in_school?: string | null
          school?: number | null
          school_name?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "schoolstaff_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "schoolstaff_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      users_in_school_classes: {
        Row: {
          checked_in_currently: boolean | null
          class_id: number | null
          created_at: string
          id: number
          role_in_school: string | null
          school: number | null
          user: string | null
        }
        Insert: {
          checked_in_currently?: boolean | null
          class_id?: number | null
          created_at?: string
          id?: number
          role_in_school?: string | null
          school?: number | null
          user?: string | null
        }
        Update: {
          checked_in_currently?: boolean | null
          class_id?: number | null
          created_at?: string
          id?: number
          role_in_school?: string | null
          school?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      users_in_tasks: {
        Row: {
          id: number
          task_id: number | null
          user_id: string
        }
        Insert: {
          id?: number
          task_id?: number | null
          user_id: string
        }
        Update: {
          id?: number
          task_id?: number | null
          user_id?: string
        }
        Relationships: []
      }
      users_letter_launch_overview: {
        Row: {
          game_ids: number[] | null
          highest_score: string
          highest_xp: number
          id: number
          user_id: string
          words_guessed_correct_ids: number[] | null
          words_guessed_total: number
        }
        Insert: {
          game_ids?: number[] | null
          highest_score: string
          highest_xp?: number
          id?: number
          user_id: string
          words_guessed_correct_ids?: number[] | null
          words_guessed_total?: number
        }
        Update: {
          game_ids?: number[] | null
          highest_score?: string
          highest_xp?: number
          id?: number
          user_id?: string
          words_guessed_correct_ids?: number[] | null
          words_guessed_total?: number
        }
        Relationships: []
      }
      versioning_data_for_app: {
        Row: {
          created_at: string
          id: number
          updated_items: string[] | null
          version: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          updated_items?: string[] | null
          version?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          updated_items?: string[] | null
          version?: string | null
        }
        Relationships: []
      }
      weekly_student_attendance: {
        Row: {
          class_id: number
          friday_percentage: number | null
          id: number
          monday_percentage: number | null
          school: number
          thursday_percentage: number | null
          tuesday_percentage: number | null
          wednesday_percentage: number | null
          week_start_date: string
        }
        Insert: {
          class_id: number
          friday_percentage?: number | null
          id?: number
          monday_percentage?: number | null
          school: number
          thursday_percentage?: number | null
          tuesday_percentage?: number | null
          wednesday_percentage?: number | null
          week_start_date: string
        }
        Update: {
          class_id?: number
          friday_percentage?: number | null
          id?: number
          monday_percentage?: number | null
          school?: number
          thursday_percentage?: number | null
          tuesday_percentage?: number | null
          wednesday_percentage?: number | null
          week_start_date?: string
        }
        Relationships: []
      }
      weekly_treasure_summary: {
        Row: {
          earned_amount: number
          id: number
          treasure_type: Database["public"]["Enums"]["treasure_types"]
          user_id: string
          week_start_date: string
        }
        Insert: {
          earned_amount?: number
          id?: number
          treasure_type: Database["public"]["Enums"]["treasure_types"]
          user_id: string
          week_start_date: string
        }
        Update: {
          earned_amount?: number
          id?: number
          treasure_type?: Database["public"]["Enums"]["treasure_types"]
          user_id?: string
          week_start_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      calendar_days: {
        Row: {
          date_of_month: string | null
          day_of_month: number | null
          is_future: boolean | null
          is_past: boolean | null
          is_today: boolean | null
          month_number: number | null
          week_of_month: number | null
          weekday_display: string | null
          year_number: number | null
        }
        Relationships: []
      }
      calendar_items: {
        Row: {
          date_due: string | null
          date_to_commence: string | null
          description: string | null
          emoji: string | null
          is_lesson: boolean | null
          role_in_school: string | null
          task_or_lesson_id: number | null
          title: string | null
          treasure_img: string | null
          treasure_name: Database["public"]["Enums"]["treasure_types"] | null
          treasure_total: number | null
          user_id: string | null
        }
        Relationships: []
      }
      class_grade_averages: {
        Row: {
          class_id: number | null
          class_name: string | null
          class_overall_average: number | null
          class_subject_average: number | null
          school_id: number | null
          student_average: number | null
          student_id: string | null
          subject_name: string | null
          subject_rank: number | null
        }
        Relationships: [
          {
            foreignKeyName: "classcompass_school_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "classcompass_school_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      collaborated_calendar: {
        Row: {
          date_of_month: string | null
          day_of_month: number | null
          event_emoji: string | null
          id: number | null
          in_school: boolean | null
          is_future: boolean | null
          is_past: boolean | null
          is_today: boolean | null
          lessons: number[] | null
          role_in_school: string | null
          tasks: number[] | null
          user: string | null
          week_of_month: number | null
          weekday_display: string | null
        }
        Relationships: []
      }
      combined_attendance_live: {
        Row: {
          absent_students: number | null
          attendance_date: string | null
          attending_students: number | null
          class_id: number | null
          role: string | null
          school: number | null
          total_students: number | null
        }
        Relationships: []
      }
      filtered_social_posts: {
        Row: {
          author_id: string | null
          post_id: number | null
          related_to_viewer: string | null
          relationship_to_other_user:
            | Database["public"]["Enums"]["relationship_type"]
            | null
          viewer_id: string | null
          visibility_level:
            | Database["public"]["Enums"]["social_post_visibility_levels"]
            | null
        }
        Relationships: []
      }
      school_grade_overview: {
        Row: {
          school: number | null
          school_overall_average: number | null
          subject_average: number | null
          subject_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      school_lesson_insights: {
        Row: {
          avg_difficulty_level: number | null
          completed_homework: number | null
          completed_lessons: number | null
          easy_lessons: number | null
          guided_lessons: number | null
          guided_lessons_percentage: number | null
          hard_lessons: number | null
          hard_lessons_completion_rate: number | null
          high_risk_students_count: number | null
          homework_completion_rate: number | null
          independent_lessons: number | null
          independent_lessons_percentage: number | null
          late_submission_rate: number | null
          late_submissions: number | null
          lesson_completion_rate: number | null
          lessons_completed_by_students: number | null
          lessons_completed_by_teachers: number | null
          medium_lessons: number | null
          school_id: number | null
          school_name: string | null
          student_lesson_completion_rate: number | null
          teacher_lesson_completion_rate: number | null
          total_homework_assigned: number | null
          total_lessons: number | null
          total_students: number | null
          total_teachers: number | null
        }
        Relationships: []
      }
      student_attendance_live: {
        Row: {
          absent_students: number | null
          attendance_date: string | null
          attending_students: number | null
          class_id: number | null
          school: number | null
          total_students: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      student_attendance_overview: {
        Row: {
          absent_students: number | null
          attending_students: number | null
          class_id: number | null
          end_date: string | null
          school: number | null
          start_date: string | null
          total_students: number | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      student_overall_averages: {
        Row: {
          class_id: number | null
          display_name: string | null
          display_name_at_school: string | null
          enrolled_subjects: string | null
          grade_percentage: number | null
          last_updated: string | null
          overall_average: number | null
          overall_grade: string | null
          school_name: string | null
          subject_count: number | null
          user: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      student_progress: {
        Row: {
          average_grade: number | null
          performance_by_system_type: Json | null
          student_id: string | null
          total_lessons: number | null
        }
        Relationships: []
      }
      student_risk_and_insights: {
        Row: {
          academic_decline_last_3_months: boolean | null
          academic_level: string | null
          academics_last_updated: string | null
          adjustments_required_count: number | null
          age_years: number | null
          aids_required_count: number | null
          avg_emotion_level: number | null
          avg_grade_score: number | null
          behaviour_last_updated: string | null
          behaviour_patterns: string | null
          below_average_treasures: boolean | null
          career_interests: string[] | null
          class_id: number | null
          common_emotional_triggers: string[] | null
          consistently_low_performance: boolean | null
          current_medal_display_name: string | null
          current_risk_level: string | null
          days_active_streak: number | null
          declining_game_performance: boolean | null
          differentiation_methods: string[] | null
          differentiation_methods_working: number[] | null
          disabilities: string | null
          disability_count: number | null
          disability_types: string | null
          display_name: string | null
          display_name_at_school: string | null
          dob: string | null
          emotion_entries_count: number | null
          emotional_deterioration_last_30_days: boolean | null
          emotional_patterns: string | null
          engagement_drop: boolean | null
          enrolled_subjects: string | null
          flash_cards_high_score_percentage: number | null
          grade_year_level: string | null
          has_friends: boolean | null
          has_severe_impact_disability: boolean | null
          inactive_for_month: boolean | null
          inactive_for_week: boolean | null
          interest_and_motivations: string[] | null
          is_ndis_participant: boolean | null
          language: string | null
          last_active_time: string | null
          last_emotion_record: string | null
          last_medication_taken: string | null
          learning_motivations: string | null
          learning_style_preferences: string[] | null
          learning_types_working: number[] | null
          longest_days_active_streak_ever: number | null
          medication_compliance_rate: number | null
          medication_log_entries: number | null
          medications: string | null
          missing_learning_style_data: boolean | null
          missing_required_adjustments: boolean | null
          negative_emotion_count: number | null
          overall_grade: string | null
          overall_risk_score: number | null
          percentage_grade: number | null
          poor_medication_compliance: boolean | null
          predominantly_negative_emotions: boolean | null
          professional_development_goals: string | null
          profile_career_interests: string[] | null
          profile_emotional_triggers: string | null
          recent_medication_changes: boolean | null
          recorded_emotions: string | null
          risk_category: string | null
          risk_flags: string[] | null
          risk_level_escalating: boolean | null
          school_name: string | null
          social_isolation_risk: boolean | null
          social_patterns: string | null
          student_id: string | null
          subject_count: number | null
          total_medications: number | null
          workplace_learning_needs: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      student_risk_and_insights_mv: {
        Row: {
          academic_decline_last_3_months: boolean | null
          academic_level: string | null
          academics_last_updated: string | null
          adjustments_required_count: number | null
          age_years: number | null
          aids_required_count: number | null
          avg_emotion_level: number | null
          avg_grade_score: number | null
          behaviour_last_updated: string | null
          behaviour_patterns: string | null
          below_average_treasures: boolean | null
          career_interests: string[] | null
          class_id: number | null
          common_emotional_triggers: string[] | null
          consistently_low_performance: boolean | null
          current_medal_display_name: string | null
          current_risk_level: string | null
          days_active_streak: number | null
          declining_game_performance: boolean | null
          differentiation_methods: string[] | null
          differentiation_methods_working: number[] | null
          disabilities: string | null
          disability_count: number | null
          disability_types: string | null
          display_name: string | null
          display_name_at_school: string | null
          dob: string | null
          emotion_entries_count: number | null
          emotional_deterioration_last_30_days: boolean | null
          emotional_patterns: string | null
          engagement_drop: boolean | null
          enrolled_subjects: string | null
          flash_cards_high_score_percentage: number | null
          grade_year_level: string | null
          has_friends: boolean | null
          has_severe_impact_disability: boolean | null
          inactive_for_month: boolean | null
          inactive_for_week: boolean | null
          interest_and_motivations: string[] | null
          is_ndis_participant: boolean | null
          language: string | null
          last_active_time: string | null
          last_emotion_record: string | null
          last_medication_taken: string | null
          learning_motivations: string | null
          learning_style_preferences: string[] | null
          learning_types_working: number[] | null
          longest_days_active_streak_ever: number | null
          medication_compliance_rate: number | null
          medication_log_entries: number | null
          medications: string | null
          missing_learning_style_data: boolean | null
          missing_required_adjustments: boolean | null
          negative_emotion_count: number | null
          overall_grade: string | null
          overall_risk_score: number | null
          percentage_grade: number | null
          poor_medication_compliance: boolean | null
          predominantly_negative_emotions: boolean | null
          professional_development_goals: string | null
          profile_career_interests: string[] | null
          profile_emotional_triggers: string | null
          recent_medication_changes: boolean | null
          recorded_emotions: string | null
          risk_category: string | null
          risk_flags: string[] | null
          risk_level_escalating: boolean | null
          school_name: string | null
          social_isolation_risk: boolean | null
          social_patterns: string | null
          student_id: string | null
          subject_count: number | null
          total_medications: number | null
          workplace_learning_needs: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      students_needing_intervention: {
        Row: {
          academic_intervention_needed: boolean | null
          accessibility_intervention_needed: boolean | null
          class_id: number | null
          display_name: string | null
          display_name_at_school: string | null
          emotional_intervention_needed: boolean | null
          engagement_intervention_needed: boolean | null
          medication_intervention_needed: boolean | null
          overall_risk_score: number | null
          risk_category: string | null
          risk_flags: string[] | null
          school_name: string | null
          social_intervention_needed: boolean | null
          student_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      students_needing_intervention_mv: {
        Row: {
          academic_intervention_needed: boolean | null
          accessibility_intervention_needed: boolean | null
          class_id: number | null
          display_name: string | null
          display_name_at_school: string | null
          emotional_intervention_needed: boolean | null
          engagement_intervention_needed: boolean | null
          medication_intervention_needed: boolean | null
          overall_risk_score: number | null
          risk_category: string | null
          risk_flags: string[] | null
          school_name: string | null
          social_intervention_needed: boolean | null
          student_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_compass"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_in_school_classes_class_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "class_grade_averages"
            referencedColumns: ["class_id"]
          },
        ]
      }
      teacher_admin_attendance_live: {
        Row: {
          attendance_date: string | null
          role_in_school: string | null
          school: number | null
          total_check_ins: number | null
          total_check_outs: number | null
        }
        Relationships: []
      }
      teacher_admin_attendance_overview: {
        Row: {
          attendance_date: string | null
          role_in_school: string | null
          school: number | null
          total_check_ins: number | null
          total_check_outs: number | null
        }
        Relationships: []
      }
      teacher_insights: {
        Row: {
          average_emotion_level: number | null
          average_grade: number | null
          average_student_behavior: number | null
          grades_needed_to_complete: number | null
          grading_day_streak: boolean | null
          grading_garages_done_today: number | null
          incomplete_class_lesson_plans: number | null
          incomplete_lessons: number | null
          most_common_emotion_image: string | null
          most_common_emotion_name: string | null
          percentage_absent_current_year: number | null
          percentage_absent_ever: number | null
          percentage_attendance_current_year: number | null
          percentage_attendance_ever: number | null
          percentage_class_lesson_plans_complete: number | null
          percentage_lessons_complete: number | null
          teacher_id: string | null
          teacher_name: string | null
          total_classes: number | null
          total_lessons_planned: number | null
          total_students: number | null
        }
        Relationships: []
      }
      teacher_student_attendance: {
        Row: {
          current_date: string | null
          currently_checked_in_students: number | null
          friday_percent: number | null
          monday_percent: number | null
          teacher_id: string | null
          thursday_percent: number | null
          today_percent: number | null
          total_students: number | null
          tuesday_percent: number | null
          wednesday_percent: number | null
          week_beginning: string | null
          weekly_attendance_percent: number | null
        }
        Relationships: []
      }
      teacher_student_averages: {
        Row: {
          school: number | null
          student_average: number | null
          student_id: string | null
          subject_name: string | null
          teacher_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "school_lesson_insights"
            referencedColumns: ["school_id"]
          },
          {
            foreignKeyName: "users_in_school_classes_school_fkey"
            columns: ["school"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_student_subject_averages: {
        Row: {
          highest_grade: number | null
          last_grade_date: string | null
          lowest_grade: number | null
          passing_rate_percentage: number | null
          students_in_subject: number | null
          subject_average: number | null
          subject_name: string | null
          teacher_id: string | null
        }
        Relationships: []
      }
      teacher_student_subject_grades: {
        Row: {
          a_count: number | null
          a_percentage: number | null
          a_plus_count: number | null
          a_plus_percentage: number | null
          average_score: number | null
          b_count: number | null
          b_percentage: number | null
          below_c_count: number | null
          c_count: number | null
          c_percentage: number | null
          category_name: string | null
          highest_score: number | null
          last_30_days_average: number | null
          lowest_score: number | null
          most_recent_grade_date: string | null
          passing_rate_percentage: number | null
          subject_name: string | null
          teacher_id: string | null
          total_enrolled_students: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subjects_category_name_fkey"
            columns: ["category_name"]
            isOneToOne: false
            referencedRelation: "subject_categories"
            referencedColumns: ["category_name"]
          },
        ]
      }
      unread_messages_count: {
        Row: {
          chat_id: number | null
          unread_count: number | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_spouse_as_guardian: {
        Args: {
          spouse_id: string
          child_id: string
        }
        Returns: undefined
      }
      adjust_treasures: {
        Args: {
          user_id: string
          treasure_name: Database["public"]["Enums"]["treasure_types"]
          amount: number
          operation: string
        }
        Returns: undefined
      }
      award_all_badges: {
        Args: {
          p_user: string
        }
        Returns: undefined
      }
      award_treasure: {
        Args: {
          p_user_id: string
          p_treasure_type: Database["public"]["Enums"]["treasure_types"]
          p_amount: number
        }
        Returns: undefined
      }
      calculate_active_days_streak: {
        Args: {
          user_uuid: string
        }
        Returns: number
      }
      calculate_emotional_growth_percentage: {
        Args: {
          p_user: string
        }
        Returns: string
      }
      calculate_recent_group_contribution: {
        Args: {
          p_user: string
        }
        Returns: number
      }
      calculate_task_streak: {
        Args: {
          p_user: string
        }
        Returns: {
          current_streak: number
          longest_streak: number
        }[]
      }
      calculate_total_messages_sent: {
        Args: {
          p_user_id: string
        }
        Returns: number
      }
      calculate_treasure_weekly_improvement: {
        Args: {
          p_user_id: string
          p_treasure_type: Database["public"]["Enums"]["treasure_types"]
        }
        Returns: number
      }
      calculate_weekly_total_earned: {
        Args: {
          p_user_id: string
        }
        Returns: number
      }
      check_and_trigger_medication_notification: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      check_gap_availability: {
        Args: {
          p_start_time: string
          p_duration: number
          p_users: string[]
        }
        Returns: boolean
      }
      convert_grade_between_systems: {
        Args: {
          grade: Json
          from_system_id: number
          to_system_id: number
        }
        Returns: Json
      }
      create_family_member: {
        Args: {
          parent_id: string
          email: string
          password: string
          first_name?: string
          last_name?: string
          display_name?: string
          is_child?: boolean
          dob?: string
          backup_email?: string
          relationship_type?: string
        }
        Returns: string
      }
      find_schedule_gaps: {
        Args: {
          p_user_id: string
          p_start_time: string
          p_end_time: string
        }
        Returns: {
          gap_start: string
          gap_duration: number
        }[]
      }
      generate_secure_password: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_weekly_emotional_summary: {
        Args: {
          p_user: string
          p_week: string
        }
        Returns: string
      }
      get_grading_system_type: {
        Args: {
          grading_method_id: number
        }
        Returns: string
      }
      is_time_slot_available: {
        Args: {
          p_start_time: string
          p_duration: number
          p_user_id: string
        }
        Returns: boolean
      }
      log_weekly_treasure_improvement: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refresh_leaderboard_for_user: {
        Args: {
          p_user_id: string
        }
        Returns: undefined
      }
      refresh_leaderboards_two: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      refresh_student_risk_views: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reschedule_all_priority_tasks: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reset_missed_streaks: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      round_to_nearest_5_minutes: {
        Args: {
          ts: string
        }
        Returns: string
      }
      schedule_single_task: {
        Args: {
          p_task: Record<string, unknown>
          p_start_time: string
          p_end_time: string
        }
        Returns: undefined
      }
      sync_existing_treasures: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_existing_users_leveling: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_leaderboard_ranks_for_user: {
        Args: {
          p_user_id: string
        }
        Returns: undefined
      }
      update_most_improved_flags: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      update_weekly_emotion_trends: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      validate_single_conversion: {
        Args: {
          value: string
          conversions: Json
        }
        Returns: undefined
      }
      validate_system_rules: {
        Args: {
          grade_details: Json
          rules: Json
        }
        Returns: undefined
      }
    }
    Enums: {
      ai_message_types:
        | "GeneralChat"
        | "EducationalChat"
        | "EducationalAnalysis"
        | "SocialAnalysis"
        | "EmotionalAnalysis"
        | "BehaviouralAnalysis"
        | "OverallAnalysis"
      communication_station_medals:
        | "Engaging Speaker"
        | "Active Participant"
        | "Amazing Listener"
        | "Conflict Resolver"
        | "Positive Influencer"
        | "Creative Collaborator"
        | "Empathy Master"
        | "Perfect Peacemaker"
        | "Supportive Mentor"
        | "Clear Communicator"
      disability_impact_level: "Mild" | "Moderate" | "Severe" | "Profound"
      disability_status: "Diagnosed" | "Suspected"
      disability_type:
        | "Physical"
        | "Sensory"
        | "Intellectual"
        | "Psychosocial"
        | "Neurological"
        | "Chronic Health Condition"
        | "Other"
      event_types:
        | "Community Event"
        | "School Event"
        | "Birthday Party"
        | "Family Event"
        | "Public Holiday"
      file_type: "image" | "video" | "document" | "audio" | "other"
      lesson_snippet_types:
        | "Video"
        | "Quiz"
        | "Flash Cards"
        | "Text Answer"
        | "Assignment"
        | "Poll"
        | "In-Person"
        | "Portfolio"
        | "Emotions"
        | "Reflection"
        | "Memory Match"
        | "Fill-In-The-Blanks"
      medication_frequency_types:
        | "Daily"
        | "Weekly"
        | "Fortnightly"
        | "Monthly"
        | "Twice Daily"
      notification_types:
        | "compliment_received"
        | "streak_reward"
        | "message"
        | "group_reward_reached"
        | "medication_to_take"
        | "badge_earned"
      project_status: "Future" | "Open" | "Paused" | "Complete" | "Closed"
      relationship_type:
        | "Student"
        | "School Admin"
        | "Principal"
        | "Teacher"
        | "Guardian"
        | "Child"
        | "School Friend"
        | "Sibling"
        | "Other Family"
        | "Vice-Principal"
        | "Other Friends"
        | "Grandparent"
        | "Grandchild"
        | "Aunt/Uncle"
        | "Niece/Nephew"
        | "Blocked"
        | "Spouse"
        | "Friend"
        | "Support Worker"
        | "Support Participant"
        | "AI Assistant"
      reward_statuses:
        | "Available To Earn"
        | "Redeemable"
        | "Paid For"
        | "Redeemed"
      scopes: "friend" | "class" | "school"
      snippet_journey_types:
        | "Scavenger Hunt"
        | "Positive Pathways"
        | "Story Quests"
        | "Emotional Journeys"
        | "Skill Builders"
        | "Memory Trails"
      social_post_visibility_levels:
        | "All Connections"
        | "Family Connections"
        | "School Students & Families"
        | "School Staff"
        | "Full School"
        | "My Supports"
        | "People I Support"
        | "Specific Users"
      support_categories:
        | "Emergency"
        | "Health"
        | "Education"
        | "Wellbeing"
        | "Family Support"
        | "Cultural"
        | "Behaviour Support"
        | "Language Support"
        | "Logistics"
        | "Transition"
        | "Safety & Welfare"
      support_types:
        | "Emergency Contact"
        | "Learning Support"
        | "Occupational Therapy"
        | "Social Support"
        | "Speech Pathology"
        | "Physical Therapy"
        | "Psychiatry"
        | "Psychology"
        | "Family Support Services"
        | "Transport Assistance"
        | "School Leaver Supports (SLES)"
        | "Paediatrician"
        | "Paediatric Specialist"
        | "Nutritionist / Dietitian"
        | "Living Assistance"
        | "Orthoptics (Visual Support)"
        | "Hearing Support (Audiology)"
        | "Assistive Technology Support"
        | "Behaviour Support Practitioner"
        | "Indigenous Liaison"
        | "Cultural & Language Support (EAL/D)"
        | "Mental Health & Wellbeing Team"
        | "Child Safety Officer"
        | "Inclusive Education Support"
        | "Career Counsellor"
        | "Youth Worker"
        | "Legal Support (Youth Justice)"
        | "NDIS Plan Manager"
        | "Community Health Nurse"
        | "Early Intervention Specialist"
        | "Transition Support Officer"
        | "Vision Support Teacher"
        | "Hearing Support Teacher"
        | "Therapy Assistant"
        | "Specialist Literacy & Numeracy Support"
        | "Positive Behaviour Support Team"
        | "Peer Mentor / Buddy Program"
        | "Family Engagement Coordinator"
        | "Interpreter / Translator"
        | "Outreach/Visiting Teacher"
        | "School Chaplain"
        | "Attendance Officer"
        | "Crisis Response Team"
        | "Youth Mental Health Service"
      task_status_types: "To Do" | "In Progress" | "Complete" | "Overdue"
      treasure_types:
        | "Artistic Amethyst"
        | "CommuniCoin"
        | "Determined Diamond"
        | "Emotion Emerald"
        | "Generosity Gem"
        | "Health Heart"
        | "Justice Jewel"
        | "Learning Loot"
        | "Peace Pearl"
        | "Responsibility Ruby"
        | "Safety Sapphire"
        | "Tidy Topaz"
      visibility_levels: "None" | "Home" | "School" | "Social" | "Full"
      who_noticed_disability_first:
        | "Parent/Guardian"
        | "Teacher"
        | "Support Worker"
        | "Medical Professional"
        | "Self"
        | "Other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
