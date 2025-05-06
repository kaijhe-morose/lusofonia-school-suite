
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import { Module } from "@/data/modules";

interface ModuleGridProps {
  modules: Module[];
  searchTerm?: string;
}

const ModuleGrid = ({ modules, searchTerm = "" }: ModuleGridProps) => {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Function to highlight matching text
  const highlight = (text: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? <span key={i} className="bg-yellow-200">{part}</span> : part
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {modules.map((module) => (
        <Card key={module.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-2 hero-gradient"></div>
          <CardContent className="p-6">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleModule(module.id)}
            >
              <div className="flex items-center">
                <span className="text-3xl mr-3">{module.icon}</span>
                <h3 className="text-xl font-semibold">
                  {searchTerm ? highlight(module.name) : module.name}
                </h3>
              </div>
              <ChevronRight 
                className={`transition-transform duration-300 ${expandedModules[module.id] ? 'rotate-90' : ''}`} 
              />
            </div>
            
            <p className="text-gray-600 mt-2 mb-4">
              {searchTerm ? highlight(module.description) : module.description}
            </p>
            
            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
              value={expandedModules[module.id] ? "item-1" : ""}
            >
              <AccordionItem value="item-1" className="border-none">
                <AccordionContent className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {module.modules.map((subModule, index) => (
                      <div key={index} className="border border-gray-200 rounded-md p-3">
                        <h4 className="font-medium text-gray-800">
                          {searchTerm ? highlight(subModule.name) : subModule.name}
                        </h4>
                        
                        {subModule.submods && subModule.submods.length > 0 && (
                          <ul className="mt-2 space-y-1">
                            {subModule.submods.map((submod, subIndex) => (
                              <li key={subIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="text-primary inline-block mr-2">•</span>
                                <span>{searchTerm ? highlight(submod) : submod}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ModuleGrid;
