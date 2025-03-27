
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, DollarSign, Users, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const loansData = [
  {
    id: '1',
    date: '03/24/24',
    customer: 'Paul White',
    status: 'Application expired',
    invoice: '#102',
    amount: '$24,000.00'
  },
  {
    id: '2',
    date: '05/10/24',
    customer: 'Amy Starr',
    status: 'Application expired',
    invoice: '#115',
    amount: '$12,000.00'
  },
  {
    id: '3',
    date: '07/14/24',
    customer: 'Jack Hart',
    status: 'Application expired',
    invoice: '#134',
    amount: '$1,000.00'
  },
  {
    id: '4',
    date: '10/14/24',
    customer: 'Laura Brown',
    status: 'Application expired',
    invoice: '#151',
    amount: '$4,000.00'
  },
];

const LoansTab = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-wisetack-dark flex items-center">
        <FileText className="mr-2 h-6 w-6 text-wisetack-blue" />
        Loan History
      </h2>
      <p className="text-gray-600 max-w-3xl">
        View all loan applications and their current status. This table provides a summary of financing activity with your customers. You can view a more in-depth report from Reports &gt; Consumer Financing.
      </p>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-32 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date
                </div>
              </TableHead>
              <TableHead className="font-medium">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Customer
                </div>
              </TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">Invoice</TableHead>
              <TableHead className="text-right font-medium">
                <div className="flex items-center gap-2 justify-end">
                  <DollarSign className="h-4 w-4" />
                  Amount
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loansData.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell className="font-medium">{loan.date}</TableCell>
                <TableCell>{loan.customer}</TableCell>
                <TableCell>
                  <Badge variant="expired">{loan.status}</Badge>
                </TableCell>
                <TableCell>{loan.invoice}</TableCell>
                <TableCell className="text-right font-medium">{loan.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="bg-wisetack-blue/5 p-6 rounded-lg border border-wisetack-blue/20 mt-4">
        <h3 className="font-semibold text-wisetack-dark text-lg mb-2">Get more approved loans:</h3>
        <p className="text-gray-700">
          Increase your financing approval rate by mentioning Wisetack earlier in your sales process. Customers are more likely to proceed with projects when flexible payment options are presented upfront.
        </p>
      </div>
    </div>
  );
};

export default LoansTab;
