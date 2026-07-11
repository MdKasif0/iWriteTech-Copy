import { Check, X } from "lucide-react";

interface ProsConsBoxProps {
  pros?: string[] | string;
  cons?: string[] | string;
}

export function ProsConsBox({ pros = [], cons = [] }: ProsConsBoxProps) {
  // next-mdx-remote sometimes fails to parse JSX array expressions and falls back to default empty array.
  // By allowing pipe-separated strings, we bypass the issue entirely.
  const prosList = typeof pros === 'string' ? pros.split('|').map(s => s.trim()).filter(Boolean) : pros;
  const consList = typeof cons === 'string' ? cons.split('|').map(s => s.trim()).filter(Boolean) : cons;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-8">
      <div className="bg-card border border-border rounded-xl p-5 md:p-6">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
            <Check className="h-4 w-4" />
          </span>
          Reasons to Buy
        </h4>
        <ul className="space-y-3">
          {prosList.map((pro, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-1.5 shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 md:p-6">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-600 dark:text-red-400">
            <X className="h-4 w-4" />
          </span>
          Reasons to Avoid
        </h4>
        <ul className="space-y-3">
          {consList.map((con, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5 shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
