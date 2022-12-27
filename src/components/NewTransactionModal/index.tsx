"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { Icon } from "../Icon";
import { NewTransactionButton, ModalOverlay, ModalContent, ModalTitle, NewTransactionForm, ModalCloseButton, TransactionType, TransactionTypes } from "./styles";

export function NewTransactionModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <ModalOverlay/>
        <ModalContent>
          <ModalTitle>Nova transação</ModalTitle>
          
          <ModalCloseButton>
            <Icon name="X" size={24}/>
          </ModalCloseButton>

          <NewTransactionForm action="">
            <input type="text" name="description" placeholder="Descrição"/>
            <input type="number" name="price" placeholder="Preço"/>
            <input type="text" name="category" placeholder="Categoria"/>

            <TransactionTypes>
              <TransactionType value="income">
                <Icon name="ArrowCircleUp" size={24}/>
                <label>Entrada</label>
              </TransactionType>
              <TransactionType value="outcome" $variant="outcome">
                <Icon name="ArrowCircleDown" size={24}/>
                <label>Saída</label>
              </TransactionType>
            </TransactionTypes>

            <button type="submit">Cadastrar</button>
          </NewTransactionForm>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}