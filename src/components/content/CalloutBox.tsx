import React from "react";
import { Info, AlertTriangle, Lightbulb } from "lucide-react";

interface CalloutBoxProps {
  type?: "info" | "warning" | "tip";
  title?: string;
  children: React.ReactNode;
}

export function CalloutBox({ type = "info", title, children }: CalloutBoxProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      icon: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      titleColor: "text-blue-700 dark:text-blue-300",
    },
    warning: {
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      icon: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
      titleColor: "text-amber-700 dark:text-amber-300",
    },
    tip: {
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      icon: <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />,
      titleColor: "text-green-700 dark:text-green-300",
    },
  };

  const currentStyle = styles[type];

  return (
    <div className={`my-8 p-5 md:p-6 rounded-xl border ${currentStyle.bg} ${currentStyle.border}`}>
      <div className="flex gap-4">
        <div className="shrink-0 mt-0.5">{currentStyle.icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${currentStyle.titleColor}`}>
              {title}
            </h4>
          )}
          <div className="text-sm text-foreground/80 leading-relaxed prose-p:last:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
