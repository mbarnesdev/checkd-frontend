import { z } from 'zod';
import { NumberTransformedString } from '@/shared/utils';

const FORM_PREVIOUS_MATCHES_AMOUNT = 5;

const CountrySchema = z.object({
  id: z.string(),
  name: z.string(),
});

const ContestantSchema = z.object({
  id: z.string(),
  name: z.string(),
  shortName: z.string(),
  officialName: z.string(),
  code: z.string(),
  position: z.string(),
  country: CountrySchema,
});

const InsightSchema = z.object({
  id: NumberTransformedString,
  fact: z.string(),
});

const FormSchema = z.object({
  home: z.array(z.string()).length(FORM_PREVIOUS_MATCHES_AMOUNT),
  away: z.array(z.string()).length(FORM_PREVIOUS_MATCHES_AMOUNT),
});

const TournamentCalendarSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const CompetitionSchema = z.object({
  id: z.string(),
  name: z.string(),
  stage: z.string(),
});

const VenueSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const LineupSchema = z.object({
  teamId: z.string(),
  teamName: z.string(),
  formation: z.string(),
  first11: z.array(z.any()),
  subs: z.array(z.any()),
  stats: z.array(
    z.object({
      fh: z.string().transform(Number),
      sh: z.string().transform(Number),
      type: z.string(),
      value: z.string().transform(Number),
    })
  ),
});

const MetaSchema = z.object({
  coverageLevel: NumberTransformedString,
  tournamentCalendar: TournamentCalendarSchema,
  competition: CompetitionSchema,
  venue: VenueSchema,
});

const TeamSchema = z.object({
  home: z.number(),
  away: z.number(),
});

const ScoresSchema = z.object({
  ht: TeamSchema,
  ft: TeamSchema,
  total: TeamSchema,
});

const LiveDataSchema = z.object({
  matchDetails: z.object({
    periodId: z.number(),
    matchStatus: z.string(),
    winner: z.string(),
    matchLengthMin: z.number(),
    matchLengthSec: z.number(),
    period: z
      .array(
        z.object({
          id: z.number(),
          start: z.string(),
          end: z.string(),
          lengthMin: z.number(),
          lengthSec: z.number(),
          announcedInjuryTime: z.number(),
        })
      )
      .length(2),
    scores: ScoresSchema,
    endDate: z.string(),
  }),
  lineups: z.object({
    home: LineupSchema,
    away: LineupSchema,
  }),
});

export const MatchSchema = z.object({
  match: z.object({
    id: z.string(),
    description: z.string(),
    date: z.string(),
    contestant: z.array(ContestantSchema).length(2),
    status: z.string(),
    prompts: z.array(z.any()),
    insights: z.array(InsightSchema),
    form: FormSchema,
    meta: MetaSchema,
    liveData: LiveDataSchema,
  }),
});

export type TMatch = z.infer<typeof MatchSchema>;
